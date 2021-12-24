from typing import ValuesView
from django.core import paginator
from django.db import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from django.db.models import Q

from django.core.paginator import Paginator


from .models import Image, Distance
from .serializers import DistanceSerializer, ImageSerializer

import cv2
import numpy

import random


# Create your views here.

@api_view(['GET'])
def getDistances(request):
    images = Image.objects.all()

    ids1 = [img.id for img in images]
    ids2 = [img.id for img in images]


    print(len(ids1))
    distances = []

    for i in ids1:
        im1 = Image.objects.get(id = i)
        
        img = cv2.imread('./images/'+str(im1.image))

        hist1 = cv2.calcHist([img], [0, 1, 2], None, [8, 8, 8], [0, 256, 0, 256, 0, 256])
        hist1 = numpy.array(hist1)

        ids2.remove(i)

        for j in ids2:
            im2 = Image.objects.get(id = j)

            imgg = cv2.imread('./images/'+str(im2.image))

            hist2 = cv2.calcHist([imgg], [0, 1, 2], None, [8, 8, 8], [0, 256, 0, 256, 0, 256])
            hist2 = numpy.array(hist2)

            dis = Distance.objects.create(
                img1= im1,
                img2= im2,
                d_corr = cv2.compareHist(hist1, hist2, cv2.HISTCMP_CORREL),
                d_chi = cv2.compareHist(hist1, hist2, cv2.HISTCMP_CHISQR),
                d_inter = cv2.compareHist(hist1, hist2, cv2.HISTCMP_INTERSECT),
                d_bhatt = cv2.compareHist(hist1, hist2, cv2.HISTCMP_BHATTACHARYYA),
            )
            
            distances.append(dis)
        

    serializer = DistanceSerializer(distances, many = True)

    return Response(serializer.data)



@api_view(['POST'])
def createDistance(request):
    print('request DATA :')
    print(request.data)
    data = request.data

    id1 = data['img1']
    id2 = data['img2']

    img1 = Image.objects.get(id = id1)
    img2 = Image.objects.get(id = id2)

    distance = Distance.objects.create(img1=img1,img2=img2)
    
    serializer = DistanceSerializer(distance)
    
    return Response(serializer.data, status=200)



@api_view(['GET'])
def getImages(request):

    images_list = Image.objects.all().order_by('-updated')

    objects = []
    for item in images_list:
        object = str(item.image).split('_')[0]
        if object not in objects:
            objects.append(object)

    print(objects)
 
    data = []
    for object in objects :
        images = Image.objects.filter(image__contains = object+'_')

        random_image = random.choice(images)

        data.append(random_image)



    serializer = ImageSerializer(data, many=True)

    return Response(serializer.data)

def searchByGlobal(img, distances,  w = {
    'bhatt' : 0.85,
    'chi' : 0.05,
    'corr' : 0.05,
    'inter' : 0.05,
}):

    globals = {}
        
    for d in distances: 
        globals[d.id] = w['chi'] * d.d_chi + w['bhatt'] * d.d_bhatt - w['corr'] * d.d_corr - w['inter'] * d.d_inter

    sorted_distances = sorted(globals.items(), key=lambda x: x[1])

    dists = []

    for (i, v) in sorted_distances:
        dists.append(distances.get(id=i))

    return dists[:30]

def searchByCorrelation(img, distances):

    return distances.order_by('-d_corr')[:20]

def searchByIntersection(img, distances):

    return distances.order_by('-d_inter')[:20]

def searchByChisqr(img, distances):

    return distances.order_by('d_chi')[:20]

def searchByBhatt(img, distances):

    return distances.order_by('d_bhatt')[:20]

@api_view(['GET'])
def getImage(request, id):


    image = Image.objects.get(id=id)


    serializer = ImageSerializer(image, many=False)


    distances = Distance.objects.filter(Q(img1_id = image.id) | Q(img2_id = image.id))
    # distances = Distance.objects.filter(img1_id = image.id) | Distance.objects.filter(img2_id = image.id)


    # poids = {
    #     'w1' : 0.25,
    #     'w2' : 0.25,
    #     'w3'
    # }

    # w1 = 1 
    # w2 = 0
    # w3 = 0
    # w4 = 0
    
    # globals = {}
    
    # for d in distances: 
    #     globals[d.id] = w1 * d.d_corr + w2 * d.d_inter + w3 * d.d_chi + w4 * d.d_bhatt
    #     # if d.img1_id == image.id:
    #     #     # img = Image.osbjects.get(d.img2_id)
    #     #     globals[d.id] = w1 * d.d_corr + w2 * d.d_inter + w3 * d.d_chi + w4 * d.d_bhatt
    #     # else:
    #     #     # img = Image.objects.get(d.img1_d)
    #     #     globals[d.id] = w1 * d.d_corr + w2 * d.d_inter + w3 * d.d_chi + w4 * d.d_bhatt


    # sorted_distances = sorted(globals.items(), key=lambda x: x[1] , reverse=True)

    # print(sorted_distances)

    dists = searchByGlobal(image, distances)
    # dists = searchByBhatt(image, distances)
    # dists = searchByChisqr(image, distances)
    # dists = searchByCorrelation(image, distances)
    # dists = searchByIntersection(image, distances)

    results = []


    # # for d in dists:
    # #     print("distance : ", d.d_inter, end = " - ")
    # #     print("image 1 ID : ", d.img1_id, end= " - ")
    # #     print("image 2 ID : ", d.img2_id)

    # dists = []

    # for (i, v) in sorted_distances:
    #     dists.append(distances.get(id=i))

    # print(dists[0].id)

    for dis in dists:
        if dis.img1_id == image.id:
            imaage = Image.objects.get(id = dis.img2_id)
            results.append(imaage)
        else:
            imaage = Image.objects.get(id = dis.img1_id)
            results.append(imaage)




    resultSerializer = ImageSerializer(results, many=True)

    return Response({'searchedImage':serializer.data,'results': resultSerializer.data }) 
    


@api_view(['POST'])
def createImage(request):

    print(request.data)
    
    title = request.data['title']
    im = request.data['image']
    

    image = Image.objects.create(title=title, image=im)  


    serializer = ImageSerializer(image, many=False)

    return Response(serializer.data, status=200)



from django.db import models

from django.db.models.fields import CharField, FloatField
from django_mysql.models import ListTextField

import cv2

# Create your models here.

def upload_path(filename):
    return '/'.join([filename])

class Image(models.Model):
    # title = models.TextField()
    # url = models.TextField(null=True)
    # image = models.ImageField(upload_to=upload_path)
    image = models.ImageField()
    histogram = ListTextField(
        base_field = CharField(max_length=25),
        default=[]
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Distance(models.Model):
    # def get_corr_distance(self):
    #     image1 = Image.objects.get(id=self.img1)
    #     image2 = Image.objects.get(id=self.img2)

    #     d_corr = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_CORREL)
    #     return d_corr

    # def get_intersection_distance(self):
    #     image1 = Image.objects.get(id=self.img1)
    #     image2 = Image.objects.get(id=self.img2)

    #     d_inter = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_INTERSECT)
    #     return d_inter

    # def get_chi_distance(self):
    #     image1 = Image.objects.get(id=self.img1)
    #     image2 = Image.objects.get(id=self.img2)

    #     d_chi = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_CHISQR)
    #     return d_chi

    # def get_bhatt_distance(self):
    #     image1 = Image.objects.get(id=self.img1)
    #     image2 = Image.objects.get(id=self.img2)

    #     d_bhatt = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_BHATTACHARYYA)
    #     return d_bhatt
    
    img1 = models.ForeignKey(Image, on_delete=models.CASCADE, related_name="img1")
    img2 = models.ForeignKey(Image, on_delete=models.CASCADE, related_name="img2")
    d_corr = models.FloatField(null=True)
    d_inter = models.FloatField(null=True)
    d_chi = models.FloatField(null=True)
    d_bhatt = models.FloatField(null=True)

    
    # def save(self, force_insert=False, force_update=False):
    #     image1 = Image.objects.get(id=self.img1)
    #     image2 = Image.objects.get(id=self.img2)

    #     print(type(image1.histogram))

    #     self.d_corr = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_CORREL)
    #     self.d_chi = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_CHISQR)
    #     self.d_inter = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_INTERSECT)
    #     self.d_bhatt = cv2.compareHist(image1.histogram, image2.histogram, cv2.HISTCMP_BHATTACHARYYA)

    #     super(Distance, self)

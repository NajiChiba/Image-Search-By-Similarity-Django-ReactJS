import json 
import glob
    
from datetime import datetime

import cv2

import random

# Data to be written 
data = {}
img ={} 
path = "./coil-100/"

dateTimeObj = datetime.now()
now = dateTimeObj.strftime("%Y-%m-%d %H:%M:%S.%f")

files = path + "*.png"
x = 0
j = 1


def getFiles(globalPath):
    files = glob.glob(globalPath)

    objects = []
    for file in files:
        object = file.split('_')[0]
        if object not in objects:
            objects.append(object)    

    nbr_imgs = 10
    images = {}
    i = 1
    for object in objects:
        if i == 21:
            break

        l = []
        for file in files:
            if object+'_' in file:
                l.append(file)
        images[object] = l

        i+=1
    
   
    imgFiles = []

    for (object, imgs) in images.items():
        imgFiles.append(random.sample(imgs, nbr_imgs))
    
    imaages = []

    # for item in imgFiles:
    imaages = [item for imgss in imgFiles for item in imgss]

   
    return imaages



def write_image_json(new_data, filename='data20x10norm.json'):
    with open(filename,'r+') as file:
        # First we load existing data into a dict.
        file_data = json.load(file)
        
        # Join new_data with file_data inside emp_details
        file_data.append(new_data)

        # Sets file's current position at offset.
        file.seek(0)
        
        # convert back to json.
        json.dump(file_data, file, indent = 4)

def write_histogram_data(hist_data, filename='hist.json'):
    with open(filename, 'r+') as file:
        file_data = json.load(file)

        file_data.append(hist_data)

        file.seek(0)

        json.dump(file_data, file, indent=4)

id = 1

METHODS = {
    ("Correlation", cv2.HISTCMP_CORREL),
    ("Chi-Squared", cv2.HISTCMP_CHISQR),
    ("Intersection", cv2.HISTCMP_INTERSECT),
    ("Hellinger", cv2.HISTCMP_BHATTACHARYYA)
}

imgFiles = getFiles(files)

for imagePath in imgFiles:

    image = cv2.imread(imagePath)

    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    hist = cv2.calcHist([image], [0,1,2], None, [8,8,8], [0,256,0,256,0,256])
    hist = cv2.normalize(hist,hist, cv2.NORM_MINMAX).flatten()

    listHist = hist.tolist()

    filename = imagePath[imagePath.rfind("\\") + 1:]
    # filename = imagePath.replace('./images/',"")

    # print(filename)
    model = "api.image"

    img['image'] = filename
    img['histogram'] = listHist
    img['created'] = now
    img['updated'] = now

    data["pk"] = id
    data["model"] = model
    data["fields"] = img
    
    write_image_json(data)

    print(id)

    id += 1

import os, sys
from ela import convert_to_ela_image
from prediction import predict_result
from PIL import Image

#Get the file name of the image sent to the interface
sentImage = sys.argv[1]
print(sentImage)

#Get the original image from this file name
imageOriginal = Image.open(sentImage).convert("RGB")

#Get the ELA converted image of the sent image
imageELA = convert_to_ela_image(sentImage, 90)

#Get the results from putting the image through the trained model
(prediction, confidence) = predict_result(sentImage)
print(prediction)
print(confidence)
#output = prediction + " " + confidence



# here the python magic takes place
# ui.py will be deleted in future


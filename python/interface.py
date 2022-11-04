import os, sys
from ela import convert_to_ela_image
from prediction import predict_result
from PIL import Image

#Get the image sent to the interface
sentImage = sys.argv[1]

#Get the original image from this
imageOriginal = Image.open(sentImage).convert("RGB")

#Get the ELA converted image of the sent image
imageELA = convert_to_ela_image(sentImage, 90)

#Get the results from putting the image through the trained model
(prediction, confidence) = predict_result(sentImage)
output = prediction + " %" + confidence

print(output)

# here the python magic takes place
# ui.py will be deleted in future


# ImageForgeryApp

to start the webserver type "node staticExpress.js" in the terminal

[Steps for preparing this in an EC2 Instance]
1. Make sure the EC2 instance is able to take inbound connections to port 3000. (Security Group)
2. Download and install all the python libraries in the requirements text file in the python folder (through python3)
3. Make sure to install git in order to clone this repository
4. Install node.js as well to run the website server


if the output text for the prediction is weird, try changing the element number in the results to either 1 or 2 [staticExpress.js]. The output slightly changes depending on what machine you use it on

credits for image forgery algorithm: 0xsp/image-forgery-detection 


Alternatively, put these list of commands into the User Data section of the advanced settings when creating the instance.
#install python3

sudo yum update -y
sudo yum install python3

#install node

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16.0.0

#install git

sudo yum install git -y

#clone repository

git clone https://github.com/martinwallinger/ImageForgeryApp.git

#install python3 dependencies

python3 -m pip install keras matplotlib numpy pillow pyqt5 seaborn sklearn tqdm
python3 -m pip install tensorflow --no-cache-dir

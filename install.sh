#!/bin/bash

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
mkdir ~/.aws
touch ~/.aws/{credentials,config}
sudo echo "aws_access_key_id = $AWS_KEY" > ~/.aws/credentials
sudo echo "aws_secret_access_key = $AWS_SECRET" >> ~/.aws/credentials

sudo echo "region = ca-central-1" > ~/.aws/config
sudo echo "output = json" >> ~/.aws/config
npm install && npm audit fix

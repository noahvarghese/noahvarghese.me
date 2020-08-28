#!/bin/bash

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
touch /root/.aws/{credentials,config}
sudo echo "aws_access_key_id = $AWS_KEY" > /root/.aws/credentials
sudo echo "aws_secret_access_key = $AWS_SECRET" >> /home/travis/.aws/credentials

sudo echo "region = ca-central-1" > /root/.aws/config
sudo echo "output = json" >> /home/travis/.aws/config
npm install && npm audit fix

#!/bin/bash

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
echo "aws_access_key_id = $AWS_KEY" > /home/travis/.aws/credentials
echo "aws_secret_access_key = $AWS_SECRET" >> /home/travis/.aws/credentials

echo "region = ca-central-1" > /home/travis/.aws/config
echo "output = json" >> /home/travis/.aws/config
npm install && npm audit fix

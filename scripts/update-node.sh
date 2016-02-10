#!/usr/bin/env bash

cd `dirname $BASH_SOURCE` && cd ..


echo "Updating node.js..."
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

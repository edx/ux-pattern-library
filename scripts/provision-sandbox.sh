#!/usr/bin/env bash

cd `dirname $BASH_SOURCE` && cd ..

# Install Ruby
./install-ruby.sh

# Update node to the latest version
./update-node.sh

# Install Ruby dependencies
bundle install

# Install JavaScript dependencies
npm install

# Update nginx
./update-nginx.sh

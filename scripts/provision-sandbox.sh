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

# Start the Pattern Library Jekyll server
jekyll serve --port 3000

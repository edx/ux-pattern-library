#!/usr/bin/env bash

cd `dirname $BASH_SOURCE` && cd ..

echo "Installing ruby-install..."
wget -O ruby-install-0.6.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.6.0.tar.gz
tar -xzvf ruby-install-0.6.0.tar.gz
cd ruby-install-0.6.0/
sudo make install

echo "Installing Ruby..."
sudo ruby-install --system ruby 2.2.4
# sudo gem install rdoc

echo "Installing bundler..."
sudo gem install bundler

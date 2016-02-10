#!/usr/bin/env bash

cd `dirname $BASH_SOURCE` && cd ..

echo "Installing Pattern Library nginx configuration..."
sudo cp -rf ~/ux-pattern-library/scripts/pattern-library.nginx /etc/nginx/sites-enabled/pattern-library
sudo ln -s ~/ux-pattern-library/_site/ /etc/nginx/pattern-library

echo "Restarting nginx..."
sudo service nginx restart

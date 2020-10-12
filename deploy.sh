#!/usr/bin/env sh

npm run build
git subtree split --branch gh-pages --prefix dist/
git push -f git@github.com:kevinmallinson/portfolio.git gh-pages:gh-pages
rm -rf dist/
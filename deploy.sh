#!/usr/bin/env sh

rm -rf dist
npm run build

cd dist
git init

echo "kmallinson.ca" > CNAME

git add .
git commit -m "Deploy"

git remote add origin git@github.com:kevinmallinson/portfolio.git
git push --force origin master:gh-pages
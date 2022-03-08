#!/bin/bash

set -e
set -u
set -x

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"


pushd "${SCRIPT_DIR}/.."

echo Working dir
pwd

echo "Building Web Page"

npm install -g
npm install


npm run build

mv build/ docs/


cp "docs/index.html" "docs/404.html"
touch docs/.nojekyll
git rm -f .circleci/config.yml  # don't build on gh-branch

git add -u .
git add docs/
git commit -m"Update Github react page automated."
git push --force origin HEAD:gh-pages

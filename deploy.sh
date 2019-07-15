#！ /usr/bin/env sh

set -e

npm run build

cd .vuepress/dist

echo 'www.jarden.vip' > CNAME

git init

git add -A

git commit -m "deploy"

git push -f https://github.com/jardenliu/fe.git master:gh-pages

cd -

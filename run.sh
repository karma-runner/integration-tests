LOCAL_PKG_TO_OVERRIDE=$1

set -e

for DIR in ./*; do
  if [ -f "$DIR/package.json" ]; then
    echo "=============================================================="
    echo " ${DIR} with ${LOCAL_PKG_TO_OVERRIDE}"
    echo "=============================================================="

    cd $DIR
    npm install > /dev/null
    npm install ${LOCAL_PKG_TO_OVERRIDE} > /dev/null
    npm test
    cd ..
  fi
done

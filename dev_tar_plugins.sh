#!/bin/bash

set -o nounset
set -o errexit

if ! [ -d "peek_mobile/src" ];then
    echo "You must run this script in the peek-mobile root project dir" >&2
    exit 1
fi

ARGS=""
ARGS="$ARGS peek_mobile/node_modules/@synerty"
ARGS="$ARGS peek_mobile/node_modules/peek_plugin_*"
ARGS="$ARGS peek_mobile/src/app/peek_plugin_*"
ARGS="$ARGS peek_mobile/src/app/plugin-ro*.ts"

OUT="dist/`date +%y%m%d_%H%M`_peek_client_fe_plugins.tar.bz2"

# Delete the file if it exists
[ -f ${OUT} ] && rm ${OUT} || true

tar cvjf $OUT --dereference $ARGS

echo
echo "Plugin patch is available at $OUT"
echo

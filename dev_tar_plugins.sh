#!/bin/bash

if ! [ -d "peek_client_fe/src" ];then
    echo "You must run this script in the peek-client-fe root project dir" >&2
    exit 1
fi

ARGS=""
ARGS="$ARGS peek_client_fe/node_modules/peek_plugin_*"
ARGS="$ARGS peek_client_fe/src/app/peek_plugin_*"
ARGS="$ARGS peek_client_fe/src/app/plugin-ro*.ts"

OUT="dist/peek_client_fe_plugins.tar.bz2"

tar cvjf $OUT --dereference $ARGS

echo
echo "Plugin patch is available at $OUT"
echo

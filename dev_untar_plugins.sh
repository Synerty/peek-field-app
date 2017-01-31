#!/bin/bash

set -o nounset
set -o errexit

IN="${1:?You must pass the full path of the tar archive as a parameter to this script}"

if ! [ -d "peek_client_fe/src" ];then
    echo "You must run this script in the peek-client-fe root project dir" >&2
    exit 1
fi

ARGS=""
ARGS="$ARGS peek_client_fe/node_modules/peek_plugin_*"
ARGS="$ARGS peek_client_fe/src/app/peek_plugin_*"
ARGS="$ARGS peek_client_fe/src/app/plugin-ro*.ts"

echo "DELETING OLD PLUGINS"
rm -rfv $ARGS

echo "EXTRACTING PLUGIN UPDATE"
tar xvjf $IN

echo
echo "The plugins have been updated"
echo

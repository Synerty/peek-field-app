#!/bin/bash

set -o nounset
set -o errexit

if ! [ -d "peek_field_app/src" ];then
    echo "You must run this script in the peek-field-app root project dir" >&2
    exit 1
fi

ARGS=""
ARGS="$ARGS peek_field_app/node_modules/@synerty"
ARGS="$ARGS peek_field_app/node_modules/peek_plugin_*"
ARGS="$ARGS peek_field_app/src/app/peek_plugin_*"
ARGS="$ARGS peek_field_app/src/app/plugin-ro*.ts"

OUT="dist/`date +%y%m%d_%H%M`_peek_office_service_fe_plugins.tar.bz2"

# Delete the file if it exists
[ -f ${OUT} ] && rm ${OUT} || true

tar cvjf $OUT --dereference $ARGS

echo
echo "Plugin patch is available at $OUT"
echo

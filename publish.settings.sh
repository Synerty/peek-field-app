#!/usr/bin/env bash

PY_PACKAGE="peek_field_app"
PYPI_PUBLISH="1"


VER_FILES_TO_COMMIT=""

VER_FILES=""
VER_FILES="${VER_FILES} peek_field_app/build-ns/package.json"
VER_FILES="${VER_FILES} peek_field_app/build-ns/app/App_Resources/iOS/Info.plist"
VER_FILES="${VER_FILES} peek_field_app/build-ns/app/App_Resources/Android/AndroidManifest.xml"
VER_FILES="${VER_FILES} peek_field_app/src/app/main-config/main-config.component.web.html"

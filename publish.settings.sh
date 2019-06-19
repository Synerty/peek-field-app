#!/usr/bin/env bash

PY_PACKAGE="peek_mobile"
PYPI_PUBLISH="1"

GITHUB_PUSH="1"

VER_FILES=""

VER_FILES="${VER_FILES} peek_mobile/build-ns/package.json"
VER_FILES="${VER_FILES} peek_mobile/build-ns/app/App_Resources/iOS/Info.plist"
VER_FILES="${VER_FILES} peek_mobile/build-ns/app/App_Resources/Android/AndroidManifest.xml"
VER_FILES="${VER_FILES} peek_mobile/src/app/main-config/main-config.component.ns.html"
VER_FILES="${VER_FILES} peek_mobile/src/app/main-config/main-config.component.web.html"

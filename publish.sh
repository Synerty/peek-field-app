#!/usr/bin/env bash

PACKAGE="peek_mobile"

set -o nounset
set -o errexit
#set -x

if [ -n "$(git status --porcelain)" ]; then
    echo "There are uncomitted changes, please make sure all changes are comitted" >&2
    exit 1
fi

if ! [ -f "setup.py" ]; then
    echo "setver.sh must be run in the directory where setup.py is" >&2
    exit 1
fi

VER="${1:?You must pass a version of the format 0.0.0 as the only argument}"

if git tag | grep -q "${VER}"; then
    echo "Git tag for version ${VER} already exists." >&2
    exit 1
fi

echo "Setting version to $VER"

VER_FILES="setup.py"
VER_FILES="${VER_FILES} ${PACKAGE}/__init__.py"
VER_FILES="${VER_FILES} peek_mobile/build-ns/app/App_Resources/iOS/Info.plist"
VER_FILES="${VER_FILES} peek_mobile/build-ns/app/App_Resources/Android/AndroidManifest.xml"
VER_FILES="${VER_FILES} peek_mobile/src/app/main-config/main-config.component.ns.html"
VER_FILES="${VER_FILES} peek_mobile/src/app/main-config/main-config.component.web.html"

for file in ${VER_FILES}
do
    sed -i "s/###PEEKVER###/${VER}/g" $file
    sed -i "s/111.111.111/${VER}/g" $file
done


# Upload to test pypi
if [[ ${VER} == *"dev"* ]]; then
    python setup.py  sdist --format=gztar
    git reset --hard

else
    python setup.py sdist --format=gztar
    git reset --hard

    git tag ${VER}
    git push
    git push --tags
fi



echo "If you're happy with this you can now run :"
echo
echo "python setup.py sdist upload -r pypi"
echo

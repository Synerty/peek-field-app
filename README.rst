==============================
Peek Platform - Mobile Service
==============================

The Peek Mobile service contains the Angular Web build environment.

The frontend is for typescript + ant design + angular2

Development
-----------

Web Frontend
````````````

The frontend is compiled/built from the backend python software when it starts. The python
backend then serves up the the webpack bundles. This is accessible via http://<ip>:8000

When you are developing with the frontend for Web, you can start development mode with:

::

        cd <project dir>/peek_field_app/build-web
        npm start


This will start a NODE development server. It will watch the project files, rebuild the
project and live reload the browser when you make changes.
It's accessed via http://<ip>:4200

There is a proxy.conf.json file that is configured to pass through certain resources to
the backend server. This allows the NODE development server to hand handle all the assets
and the backend to still handle the file uploads, vortex, etc.

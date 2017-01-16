/**
 * This file is included by the angular build.
 * The peek-web-ns module requires the nativescript-angular,
 * which causes webpack to load it.
 *
 * This causes all kinds of missing nativescript errors that we don't want in the web
 * version.
 *
 * This file is loaded only by angular-cli / webpack
 */

export default false;

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {PeekCoreConfigService} from "@synerty/peek-web-ns";
PeekCoreConfigService.PLATFORM_TARGET = PeekCoreConfigService.PLATFORMS.MOBILE_NATIVE;

// Set the URL for the vortex
import {VortexService} from "@synerty/vortexjs";
VortexService.setVortexUrl("http://10.211.55.14:8000/vortex");

// Import some stuff that we'
import "@synerty/vortexjs";
import "nativescript-angular";

// // Potentially enable angular prod mode
// import {enableProdMode} from "@angular/core";
// import {environment} from "../src/environments/environment";
//
// if (environment.production) {
//     enableProdMode();
// }


// This should be last
import {AppNsModule} from "./app.ns.module";
platformNativeScriptDynamic().bootstrapModule(AppNsModule);

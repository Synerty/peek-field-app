// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {PeekCoreConfigService} from "@synerty/peek-web-ns";
import {AppModule} from "./app.module";
import "@synerty/vortexjs";
import "nativescript-angular";

PeekCoreConfigService.PLATFORM_TARGET = PeekCoreConfigService.PLATFORMS.MOBILE_NATIVE;

platformNativeScriptDynamic().bootstrapModule(AppModule);

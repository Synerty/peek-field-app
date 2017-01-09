import "../polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

// Potentially enable angular prod mode
import {enableProdMode} from "@angular/core";
import {environment} from "../environments/environment";

if (environment.production) {
    enableProdMode();
}

// This should be last
import {AppWebModule} from "./app.web.module";
platformBrowserDynamic().bootstrapModule(AppWebModule);

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

import "nativescript-websockets";
import "nativescript-localstorage";
import "rxjs/add/operator/filter";
import "moment";
// Set the URL for the vortex
import {VortexService} from "@synerty/vortexjs";
// VortexService.setVortexUrl(`http://${host}:8000/vortex`);
// Import some stuff that we need
import "@synerty/vortexjs";
// import "nativescript-angular";
// // Potentially enable angular prod mode
// import {enableProdMode} from "@angular/core";
// import {environment} from "../src/environments/environment";
//
// if (environment.production) {
//     enableProdMode();
// }
// This should be last
import {AppNsModule} from "./app.ns.module";
// ---------- BEGIN PLUGIN CONTENT UPDATE
import * as application from "application";
import {SyncStatus} from "nativescript-peek-update/code-push-lib";
import {CodePush} from "nativescript-peek-update/code-push";
import {isIOS} from "platform";

// add this in some central place that's executed once in a lifecycle
application.on(application.resumeEvent, () => {

    let codePush = new CodePush();

    codePush.sync({
        deploymentKey: isIOS ? "your-ios-deployment-key" : "your-android-deployment-key"
    })
        .then((syncStatus: SyncStatus): void => {
            console.log("CodePush syncStatus: " + syncStatus);
            if (syncStatus === SyncStatus.UP_TO_DATE) {
                console.log("CodePush: no pending updates; you're running the latest version!");
            } else if (syncStatus === SyncStatus.UPDATE_INSTALLED) {
                console.log("CodePush: update installed - it will be activated upon next cold boot");
            }
        });
});
// ---------- END PLUGIN CONTENT UPDATE

platformNativeScriptDynamic().bootstrapModule(AppNsModule);

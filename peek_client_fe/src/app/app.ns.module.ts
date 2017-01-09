import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular";

// @synerty
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {PeekRouterModule} from "@synerty/peek-web-ns";
import {PeekModuleFactoryLoader} from "./module-loader.ns.factory";
import {VortexService} from "@synerty/vortexjs";

// Routes
import {staticRoutes} from "./app.routes";

// Components
import {AppComponent} from "./app.component";
import {MainHomeComponent} from "./main-home/main-home.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {MainTitleComponent} from "./main-title/main-title.component";
import {UnknownRouteComponent} from "./unknown-route/unknown-route.component";


@NgModule({
    declarations: [AppComponent,
        MainTitleComponent,
        MainHomeComponent,
        MainMenuComponent,
        UnknownRouteComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        PeekRouterModule.forRoot(staticRoutes),
        // PeekRouterModule.forRoot(staticRoutes),
        // Ng2BalloonMsgModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [VortexService, Ng2BalloonMsgService,
        {provide: NgModuleFactoryLoader, useClass: PeekModuleFactoryLoader}
    ]
})
export class AppNsModule {

}


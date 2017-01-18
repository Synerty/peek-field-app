import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular";
import {FormsModule} from "@angular/forms";
// @synerty
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {PeekRouterModule} from "@synerty/peek-web-ns";
import {PeekModuleFactoryLoader} from "./module-loader.ns.factory";
import {
    VortexService,
    VortexStatusService,
    WebSqlFactoryService
} from "@synerty/vortexjs";
import {WebSqlNativeScriptFactoryService} from "@synerty/vortexjs/index-nativescript";
// Routes
import {staticRoutes} from "./app.routes";
// Components
import {AppComponent} from "./app.component";
import {MainHomeComponent} from "./main-home/main-home.component";
import {MainTitleComponent} from "./main-title/main-title.component";
import {UnknownRouteComponent} from "./unknown-route/unknown-route.component";


@NgModule({
    declarations: [AppComponent,
        MainTitleComponent,
        MainHomeComponent,
        UnknownRouteComponent],
    bootstrap: [AppComponent],
    imports: [FormsModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        PeekRouterModule.forRoot(staticRoutes),
        // Ng2BalloonMsgModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [VortexStatusService, VortexService, Ng2BalloonMsgService,
        {provide: NgModuleFactoryLoader, useClass: PeekModuleFactoryLoader},
        {provide: WebSqlFactoryService, useClass: WebSqlNativeScriptFactoryService}
    ]
})
export class AppNsModule {

}

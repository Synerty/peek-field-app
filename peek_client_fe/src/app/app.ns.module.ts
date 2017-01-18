import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular";
import {FormsModule} from "@angular/forms";
// @synerty
import {PeekRouterModule} from "@synerty/peek-web-ns";
import {PeekModuleFactoryLoader} from "./module-loader.ns.factory";
import {
    WebSqlFactoryService,
    TupleDataObserverService,
    TupleDataObservableNameService,
    TupleOfflineStorageService,
    TupleOfflineStorageNameService,
    TupleDataOfflineObserverService
} from "@synerty/vortexjs";
import {WebSqlNativeScriptFactoryService} from "@synerty/vortexjs/index-nativescript";
// Routes
import {staticRoutes} from "./app.routes";
// Providers
import {peekRootProviders} from "./app.providers";
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
        PeekRouterModule.forRoot(staticRoutes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        {provide: NgModuleFactoryLoader, useClass: PeekModuleFactoryLoader},
        {provide: WebSqlFactoryService, useClass: WebSqlNativeScriptFactoryService},
        ...peekRootProviders,

        // Use the TupleDataObserver services, with offline storage
        {
            provide: TupleDataObservableNameService,
            useValue: new TupleDataObservableNameService(
                "peek_client", {"plugin": "peek_client"})
        }, {
            provide: TupleOfflineStorageNameService,
            useValue: new TupleOfflineStorageNameService("peek_client")
        },
        // These have NAME dependencies
        TupleDataObserverService,
        TupleOfflineStorageService,
        TupleDataOfflineObserverService
    ]
})
export class AppNsModule {

}

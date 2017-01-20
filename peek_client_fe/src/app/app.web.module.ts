// Angular
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
// @synerty
import {Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {PeekModuleFactory} from "@synerty/peek-web-ns";
import {WebSqlFactoryService} from "@synerty/vortexjs";
import {WebSqlBrowserFactoryService} from "@synerty/vortexjs/index-browser";
import {
    TupleDataObserverService,
    TupleDataObservableNameService,
    TupleOfflineStorageService,
    TupleOfflineStorageNameService,
    TupleDataOfflineObserverService
} from "@synerty/vortexjs";
// Routes
import {staticRoutes} from "./app.routes";
import {peekRootProviders} from "./app.providers";
// This app
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
    imports: [
        RouterModule,
        PeekModuleFactory.RouterModule.forRoot(staticRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BalloonMsgModule
    ],
    providers: [
        {provide: WebSqlFactoryService, useClass: WebSqlBrowserFactoryService},
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
export class AppWebModule {

}

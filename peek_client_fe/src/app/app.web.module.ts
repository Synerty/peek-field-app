// Angular
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

// @synerty
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {PeekRouterModule} from "@synerty/peek-web-ns";
import {VortexService} from "@synerty/vortexjs";

// Routes
import {staticRoutes} from "./app.routes";

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
        PeekRouterModule.forRoot(staticRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BalloonMsgModule
    ],
    providers: [VortexService, Ng2BalloonMsgService]
})
export class AppWebModule {
}


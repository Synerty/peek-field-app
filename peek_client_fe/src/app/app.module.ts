// Angular
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
// Valor software
// import {AlertModule} from "ng2-bootstrap/ng2-bootstrap";
// import {DropdownModule} from "ng2-bootstrap/ng2-bootstrap";
// @synerty
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {VortexService} from "@synerty/vortexjs";
// This app
import {AppRoutingModule} from "./app-routing.module";
import {AppRootComponent} from "./app-root.component";
import {HomeModule} from "./home/home.module";
import {MobileContainerComponent} from "./mobile-container/mobile-container.component";
import {DesktopContainerComponent} from "./desktop-container/desktop-container.component";

@NgModule({
    declarations: [
        MobileContainerComponent,
        DesktopContainerComponent,
        AppRootComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule,
        Ng2BalloonMsgModule,
        // AlertModule.forRoot(),
        // DropdownModule.forRoot()

    ],
    providers: [VortexService, Ng2BalloonMsgService],
    bootstrap: [AppRootComponent]
})
export class AppModule {
}

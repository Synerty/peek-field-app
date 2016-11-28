import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeModule} from "./home/home.module";
import {Ng2BalloonMsgService, Ng2BalloonMsgModule} from "@synerty/ng2-balloon-msg";
import {VortexService} from "@synerty/vortexjs";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule,
        Ng2BalloonMsgModule

    ],
    providers: [VortexService, Ng2BalloonMsgService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

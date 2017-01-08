import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import {NativeScriptRouterModule} from "nativescript-angular";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {PeekModuleFactoryLoader} from "./peek-module-factory-loader";
import {UnknownRouteComponent} from "./unknown-route.component";
import {VortexService} from "@synerty/vortexjs";
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {routes} from "./app.routes";
import {MainTitleComponent} from "./main-title/main-title.component";
import {MainHomeComponent} from "./main-home/main-home.component";


VortexService.setVortexUrl("http://10.211.55.14:8000/vortex");

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
        NativeScriptRouterModule.forRoot(routes)],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [VortexService, Ng2BalloonMsgService, {
        provide: NgModuleFactoryLoader,
        useClass: PeekModuleFactoryLoader
    }]
})
export class AppModule {

}


import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { BalloonMsgModule } from "@synerty/peek-plugin-base-js"
import {
    TupleActionPushOfflineSingletonService,
    TupleOfflineStorageNameService,
    TupleStorageFactoryService,
    TupleStorageFactoryServiceWeb,
    WebSqlBrowserFactoryService,
    WebSqlFactoryService,
} from "@synerty/vortexjs"
import { staticRoutes } from "./app.routes"
import { peekRootServices } from "./app.services"
import { AppComponent } from "./app.component"
import { MainHomeComponent } from "./main-home/main-home.component"
import { MainConfigComponent } from "./main-config/main-config.component"
import { MainTitleComponent } from "./main-title/main-title.component"
import { MainFooterComponent } from "./main-footer/main-footer.component"
import { UnknownRouteComponent } from "./unknown-route/unknown-route.component"
import { pluginRootModules } from "../@_peek/plugin-root-modules"
import { pluginRootServices } from "@_peek/plugin-root-services"
import { PluginRootComponent } from "./plugin-root.component"
import { en_US, NgZorroAntdModule, NZ_I18N } from "ng-zorro-antd"
import { HttpClientModule } from "@angular/common/http"
import {
    en_US as mobile_en_US,
    LOCAL_PROVIDER_TOKEN,
    NgZorroAntdMobileModule,
} from "ng-zorro-antd-mobile"
import { SearchModule } from "@_peek/peek_core_search/search.module"
import { registerLocaleData } from "@angular/common"
import en from "@angular/common/locales/en"
import { FormsModule } from "@angular/forms"
import { NzIconModule } from "ng-zorro-antd/icon"

registerLocaleData(en)

export function tupleOfflineStorageNameServiceFactory() {
    return new TupleOfflineStorageNameService("peek_client")
}

@NgModule({
    declarations: [
        AppComponent,
        MainTitleComponent,
        MainFooterComponent,
        MainHomeComponent,
        MainConfigComponent,
        UnknownRouteComponent,
        PluginRootComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot(staticRoutes),
        FormsModule,
        NzIconModule,
        BrowserModule,
        BrowserAnimationsModule,
        BalloonMsgModule,
        ...pluginRootModules,
        NgZorroAntdModule,
        NgZorroAntdMobileModule,
        SearchModule,
        HttpClientModule,
    ],
    providers: [
        {provide: NZ_I18N, useValue: en_US},
        {provide: LOCAL_PROVIDER_TOKEN, useValue: mobile_en_US},
        ...peekRootServices,
        {
            provide: WebSqlFactoryService,
            useClass: WebSqlBrowserFactoryService,
        },
        {
            provide: TupleStorageFactoryService,
            useClass: TupleStorageFactoryServiceWeb,
        },
        TupleActionPushOfflineSingletonService,
        ...pluginRootServices,
    ],
})
export class AppModule {
}

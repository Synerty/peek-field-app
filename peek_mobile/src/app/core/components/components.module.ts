import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { HeaderComponent } from "./header"
import { NzIconModule } from "ng-zorro-antd/icon"
import { SearchModule } from "@_peek/peek_core_search/search.module"
import { NzBadgeModule } from 'ng-zorro-antd/badge'

const COMPONENTS = [
    HeaderComponent,
]

@NgModule({
    declarations: COMPONENTS,
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        SearchModule,
        NzIconModule,
        NzBadgeModule,
    ],
    exports: COMPONENTS,
})
export class ComponentsModule {
}

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { HeaderComponent } from "./header"

const COMPONENTS = [
    HeaderComponent,
]

@NgModule({
    declarations: COMPONENTS,
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
    ],
    exports: COMPONENTS,
})
export class ComponentsModule {
}

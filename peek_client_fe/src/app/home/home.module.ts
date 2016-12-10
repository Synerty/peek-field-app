import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeIconsComponent} from "./home-icons/home-icons.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HomeComponent, HomeIconsComponent],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule {
}

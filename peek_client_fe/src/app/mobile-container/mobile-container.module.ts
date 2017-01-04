import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileContainerComponent} from "./mobile-container.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MobileContainerComponent],
    exports: [MobileContainerComponent]
})
export class MobileContainerModule {
}

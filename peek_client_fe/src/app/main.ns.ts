// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import  "@synerty/vortexjs";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";

import {Component} from "@angular/core";


@Component({
    selector: "peek-main-app",
    template: `<StackLayout class="p-20">
    <Label text="IT WORKS"></Label>
</StackLayout>
`,
})
export class NSAppComponent  {

}




@NgModule({
    declarations: [NSAppComponent],
    bootstrap: [NSAppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NSAppModule {

}



platformNativeScriptDynamic().bootstrapModule(NSAppModule);

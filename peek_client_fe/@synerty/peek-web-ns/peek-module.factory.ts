import {ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";

export class PeekModuleFactory {


    /**
     * Provide a cross platform Browser module
     */
    static get FormsModules(): ModuleWithProviders[] {
        // NativeScriptFormsModule
        let Mod = require("nativescript-angular")["NativeScriptModule"];
        let FMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
        return [(<any>FormsModule), Mod, FMod];
    }

    /**
     * Provide a cross platform Router module
     */
    static get RouterModule(): any {
        let Mod = require("nativescript-angular")["NativeScriptRouterModule"];
        return Mod;
    }

}


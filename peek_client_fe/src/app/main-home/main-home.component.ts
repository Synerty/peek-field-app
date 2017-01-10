import {PeekComponent} from "@synerty/peek-web-ns";
import {OnInit} from "@angular/core";
import {VortexService, ComponentLifecycleEventEmitter, Tuple} from "@synerty/vortexjs";


export class PluginAppTileTuple extends Tuple {
    constructor() {
        super('peek_client.PluginAppTileTuple');
    }

    name: string;
    title: string;
    resourcePath: string;
}

export const homeIconListFilt = {
    plugin: 'peek_client',
    key: 'home.apps'
};

let links = [{
    name: "Home",
    title: "Home",
    resourcePath: "/"
}, {
    name: "Switching",
    title: "Switching",
    resourcePath: "/peek_plugin_pof_field_switching"
}, {
    name: "Noop",
    title: "Noop",
    resourcePath: "/peek_plugin_noop"
}, {
    name: "Switching Test",
    title: "Switching Test",
    resourcePath: "/peek_plugin_pof_field_switching/swtest"
}];

@PeekComponent({
    selector: "peek-main-home",
    templateUrl: 'main-home.component.web.html',
    styleUrls : ['main-home.component.web.css'],
    moduleFilename: module.filename
})
export class MainHomeComponent extends ComponentLifecycleEventEmitter implements OnInit {

    testMsg: string = "Unified home Update3";

    // appDetails: PluginAppTileTuple[] = [];
    appDetails = links;

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this, () => {
            return homeIconListFilt;
        }).observable.subscribe(tuples => this.appDetails = <PluginAppTileTuple[]>tuples);

    }

    ngOnInit() {
    }

}

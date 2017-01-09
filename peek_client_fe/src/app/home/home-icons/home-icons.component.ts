import {Component, OnInit} from "@angular/core";
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

// @Component({
//     selector: 'app-home-icons',
//     templateUrl: './home-icons.component.html',
//     styleUrls: ['./home-icons.component.css']
// })
export class HomeIconsComponent extends ComponentLifecycleEventEmitter implements OnInit {


    appDetails: PluginAppTileTuple[] = [];

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this, () => {
            return homeIconListFilt;
        }).observable.subscribe(tuples => this.appDetails = <PluginAppTileTuple[]>tuples);

    }

    ngOnInit() {
    }

}

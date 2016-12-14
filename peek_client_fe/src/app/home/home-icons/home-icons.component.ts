import {Component, OnInit} from "@angular/core";
import {VortexService, ComponentLifecycleEventEmitter, Tuple} from "@synerty/vortexjs";



class PluginAppTileTuple extends Tuple {
    constructor() {
        super('peek_client.PluginAppTileTuple');
    }

    name: string;
    title: string;
    resourcePath: string;
}

@Component({
    selector: 'app-home-icons',
    templateUrl: './home-icons.component.html',
    styleUrls: ['./home-icons.component.css']
})
export class HomeIconsComponent extends ComponentLifecycleEventEmitter implements OnInit {
    private readonly homeIconListFilt = {
        plugin: 'peek_client',
        key: 'home.apps'
    };

    appDetails: PluginAppTileTuple[] = [];

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this, () => {
            return this.homeIconListFilt;
        }).observable.subscribe(tuples => this.appDetails = <PluginAppTileTuple[]>tuples);

    }

    ngOnInit() {
    }

}

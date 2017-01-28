import {PeekComponent} from "@synerty/peek-web-ns";
import {OnInit} from "@angular/core";
import {
    ComponentLifecycleEventEmitter,
    Tuple,
    TupleDataOfflineObserverService,
    TupleSelector
} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-client-fe-util";


export class PluginAppTileTuple extends Tuple {
    constructor() {
        super('peek_client.PluginAppTileTuple');
    }

    name: string;
    title: string;
    resourcePath: string;
    pluginIconPath:string;
}

export const homeIconListFilt = {
    plugin: 'peek_client',
    key: 'home.apps'
};


@PeekComponent({
    selector: "peek-main-home",
    templateUrl: 'main-home.component.web.html',
    styleUrls: ['main-home.component.web.css'],
    moduleFilename: module.filename
})
export class MainHomeComponent extends ComponentLifecycleEventEmitter implements OnInit {

    // appDetails: PluginAppTileTuple[] = [];
    appDetails = [];

    constructor(tupleDataObserver: TupleDataOfflineObserverService, titleService: TitleService) {
        super();
        titleService.setTitle("Peek Home");

        let tupleSelector = new TupleSelector('peek-client.PluginAppTileTuple', {});
        let sup = tupleDataObserver.subscribeToTupleSelector(tupleSelector)
            .subscribe(tuples => this.appDetails = <PluginAppTileTuple[]>tuples);
        this.onDestroyEvent.subscribe(() => sup.unsubscribe());

    }

    ngOnInit() {
    }

}

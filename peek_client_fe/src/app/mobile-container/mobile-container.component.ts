import {Component, OnInit} from "@angular/core";
import {VortexService, ComponentLifecycleEventEmitter} from "@synerty/vortexjs";
import {
    PluginAppTileTuple,
    homeIconListFilt
} from "../home/home-icons/home-icons.component";

@Component({
    selector: 'app-mobile-container',
    templateUrl: './mobile-container.component.html',
    styleUrls: ['./mobile-container.component.css']
})
export class MobileContainerComponent extends ComponentLifecycleEventEmitter implements OnInit {

    title: string = "Test Title";

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

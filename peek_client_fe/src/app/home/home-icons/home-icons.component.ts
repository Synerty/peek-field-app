import {Component, OnInit} from "@angular/core";
import {VortexService, ComponentLifecycleEventEmitter} from "@synerty/vortexjs";


interface AppDetailsObject {
    title: string;
    name: string;
}

@Component({
    selector: 'app-home-icons',
    templateUrl: './home-icons.component.html',
    styleUrls: ['./home-icons.component.css']
})
export class HomeIconsComponent extends ComponentLifecycleEventEmitter implements OnInit {
    private readonly homeIconListFilt = {
        papp: 'peek_client',
        key: 'home.apps'
    };

    appDetails: AppDetailsObject[] = [];

    constructor(vortexService: VortexService) {
        super();

        vortexService.createTupleLoader(this, () => {
            return this.homeIconListFilt;
        }).observable.subscribe(tuples => this.appDetails = <AppDetailsObject[]>tuples);

    }

    ngOnInit() {
    }

}

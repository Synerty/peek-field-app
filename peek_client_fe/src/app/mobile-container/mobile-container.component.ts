import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
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

    constructor(vortexService: VortexService, private route: ActivatedRoute) {
        super();

        let routeSubscription = route.data
            .subscribe(data => {
                // this.title = data["title"];
            });

        this.onDestroyEvent.subscribe(() => routeSubscription.unsubscribe());

        vortexService.createTupleLoader(this, () => {
            return homeIconListFilt;
        }).observable.subscribe(tuples => this.appDetails = <PluginAppTileTuple[]>tuples);

    }

    ngOnInit() {
    }

}


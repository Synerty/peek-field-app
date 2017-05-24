import {Component, OnInit} from "@angular/core";
import {
    ComponentLifecycleEventEmitter,
    TupleDataOfflineObserverService
} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-mobile-util";
import {homeLinks} from "../../plugin-home-links";


@Component({
    selector: "peek-main-home",
    templateUrl: 'main-home.component.web.html',
    moduleId: module.id
})
export class MainHomeComponent extends ComponentLifecycleEventEmitter implements OnInit {

    appDetails = homeLinks;

    constructor(tupleDataObserver: TupleDataOfflineObserverService, titleService: TitleService) {
        super();
        titleService.setTitle("Peek Home");

    }

    ngOnInit() {
    }

    appButtonGridRows(): string {
        let val = "";
        let rowCount = parseInt((this.appDetails.length / 2).toString());
        for (let i = 0; i < rowCount; i++) {
            val += " auto";
        }
        return val;
    }

}

import {PeekComponent} from "@synerty/peek-web-ns";
import {OnInit} from "@angular/core";
import {
    ComponentLifecycleEventEmitter,
    Tuple,
    TupleDataOfflineObserverService,
    TupleSelector
} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-client-fe-util";
import {homeLinks} from "../plugin-home-links";



@PeekComponent({
    selector: "peek-main-home",
    templateUrl: 'main-home.component.web.html',
    styleUrls: ['main-home.component.web.css'],
    moduleFilename: module.filename
})
export class MainHomeComponent extends ComponentLifecycleEventEmitter implements OnInit {

    appDetails = homeLinks;

    constructor(tupleDataObserver: TupleDataOfflineObserverService, titleService: TitleService) {
        super();
        titleService.setTitle("Peek Home");

    }

    ngOnInit() {
    }

}

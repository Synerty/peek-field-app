import {PeekComponent} from "@synerty/peek-web-ns";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {OnInit} from "@angular/core";

@PeekComponent({
    selector: "peek-main-app",
    templateUrl: "app.component.web.html",
    moduleFilename: module.filename
})
export class AppComponent implements OnInit {

    constructor(private vortexService: VortexService,
                private vortexStatusService: VortexStatusService) {

    }

    ngOnInit() {
        this.vortexService.reconnect();
    }

}


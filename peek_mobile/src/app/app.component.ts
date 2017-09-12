import {Component} from "@angular/core";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {OnInit} from "@angular/core";

@Component({
    selector: "peek-main-app",
    templateUrl: "app.component.web.html",
    moduleId: module.id
})
export class AppComponent implements OnInit {

    rowSpan = 1;

    constructor(private vortexService: VortexService,
                private vortexStatusService: VortexStatusService) {

    }

    ngOnInit() {
        this.vortexService.reconnect();
    }

}


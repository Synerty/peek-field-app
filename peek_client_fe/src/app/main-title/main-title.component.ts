import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {commonVal} from "../testval";
import {PeekComponent} from "@synerty/peek-web-ns";

@PeekComponent({
    selector: "peek-main-title",
    templateUrl: "main-title.component.web.html",
    moduleFilename: module.filename
})
export class MainTitleComponent implements OnDestroy {

    private routeSubscription: any;

    // title: string = "Peek";
    title: string = commonVal;

    constructor(route: ActivatedRoute) {
        // this.routeSubscription = this.route
        //     .data
        //     .subscribe(data => this.title = data["title"]);

    }

    ngOnDestroy() {
        // this.routeSubscription.unsubscribe();
    }
}


import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: "peek-main-title",
    templateUrl: "main-title/main-title.component.ns.html",
})
export class MainTitleComponent implements OnDestroy {

    private routeSubscription: any;

    title: string = "Peek";

    constructor( route: ActivatedRoute) {
        // this.routeSubscription = this.route
        //     .data
        //     .subscribe(data => this.title = data["title"]);

    }

    ngOnDestroy() {
        // this.routeSubscription.unsubscribe();
    }
}


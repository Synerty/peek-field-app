import {OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PeekComponent} from "@synerty/peek-web-ns";
import {TitleService} from "@synerty/peek-client-fe-util";
import {VortexStatusService} from "@synerty/vortexjs";
import {titleBarLinks} from "../plugin-title-bar-links";

@PeekComponent({
    selector: "peek-main-title",
    templateUrl: "main-title.component.web.html",
    styleUrls: ["main-title.component.web.css"],
    moduleFilename: module.filename
})
export class MainTitleComponent implements OnInit, OnDestroy {

    private subscriptions: any[] = [];

    private leftLinks = [];
    private rightLinks = [];

    title: string = "Peek";
    vortexIsOnline:boolean= false;

    constructor(vortexStatusService:VortexStatusService, titleService: TitleService) {
        this.subscriptions.push(
            titleService.title.subscribe(title => this.title = title));

        this.subscriptions.push(
            vortexStatusService.isOnline.subscribe(v => this.vortexIsOnline = v));

        for (let link of titleBarLinks) {
            if (link.left)
                this.leftLinks.push(link);
            else
                this.rightLinks.push(link);
        }
    }

    ngOnInit() {
        // this.routeSubscription = this.route
        //     .data
        //     .subscribe(v => this.title = "xx" + JSON.stringify(v));
    }

    ngOnDestroy() {
        while (this.subscriptions.length > 0)
            this.subscriptions.pop().unsubscribe();
    }
}


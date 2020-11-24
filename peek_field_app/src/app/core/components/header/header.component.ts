import { ChangeDetectionStrategy, Component } from "@angular/core"
import {
    HeaderService,
    IHeaderLink,
    NavBackService,
    NotificationService,
} from "@synerty/peek-plugin-base-js"
import { LoggedInGuard } from "@peek/peek_core_user"
import { BehaviorSubject } from "rxjs"
import { filter } from "rxjs/operators"
import { homeLinks } from "@_peek/plugin-home-links"

@Component({
    selector: "header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    fieldIncidentsEnabled$ = new BehaviorSubject<boolean>(
        !!homeLinks.find(
            link => link.name === "peek_plugin_enmac_field_incidents")
    )
    fieldSwitchingEnabled$ = new BehaviorSubject<boolean>(
        !!homeLinks.find(
            link => link.name === "peek_plugin_enmac_field_switching")
    )
    inboxEnabled$ = this.headerService.links$.pipe(
        filter((links: IHeaderLink[]) =>
            !!links.find(link => link.plugin === "peek_plugin_inbox"))
    )
    sosEnabled$ = this.headerService.links$.pipe(
        filter((links: IHeaderLink[]) =>
            !!links.find(link => link.plugin === "peek_plugin_enmac_chat"))
    )
    showSearch$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    
    constructor(
        public headerService: HeaderService,
        private loggedInGuard: LoggedInGuard,
        public navBackService: NavBackService,
        public notificationService: NotificationService,
    ) {
    }
    
    get showSearch() {
        return this.showSearch$.getValue()
    }
    
    set showSearch(value) {
        this.showSearch$.next(value)
    }
    
    showSearchClicked(): void {
        if (this.showSearch) {
            this.showSearch = false
        }
        else {
            const canActivate: any = this.loggedInGuard.canActivate()
            if (canActivate) {
                this.showSearch = true
            }
            else if (canActivate.then) {
                canActivate.then((val: boolean) => this.showSearch = val)
            }
        }
    }
}


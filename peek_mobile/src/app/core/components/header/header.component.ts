import { ChangeDetectionStrategy, Component } from "@angular/core"
import {
    HeaderService,
    IHeaderLink,
    NavBackService,
    NotificationService
} from "@synerty/peek-plugin-base-js"
import { VortexStatusService } from "@synerty/vortexjs"
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
    sosEnabled$ = this.headerService.links$.pipe(
        filter((links: IHeaderLink[]) =>
            !!links.find(link => link.plugin === "peek_plugin_pof_chat"))
    )
    fieldIncidentsEnabled$ = new BehaviorSubject<boolean>(
        !!homeLinks.find(
            link => link.name === "peek_plugin_pof_field_incidents")
    )
    fieldSwitchingEnabled$ = new BehaviorSubject<boolean>(
        !!homeLinks.find(
            link => link.name === "peek_plugin_pof_field_switching")
    )
    inboxEnabled$ = this.headerService.links$.pipe(
        filter((links: IHeaderLink[]) =>
            !!links.find(link => link.plugin === "peek_plugin_inbox"))
    )
    
    showSearch$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    
    get showSearch() {
        return this.showSearch$.getValue()
    }
    
    set showSearch(value) {
        this.showSearch$.next(value)
    }
    
    constructor(
        public vortexStatusService: VortexStatusService,
        public headerService: HeaderService,
        private loggedInGuard: LoggedInGuard,
        public navBackService: NavBackService,
        public notificationService: NotificationService,
    ) { }
    
    linkTitle(title: IHeaderLink) {
        if (!title.badgeCount) {
            return title.text
        }
        if (title.left) {
            return `${title.text} (${title.badgeCount})`
        }
        return `(${title.badgeCount}) ${title.text}`
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


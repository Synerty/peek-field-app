import { ChangeDetectionStrategy, Component } from "@angular/core"
import { HeaderService, IHeaderLink, NavBackService } from "@synerty/peek-plugin-base-js"
import { VortexStatusService } from "@synerty/vortexjs"
import { LoggedInGuard } from "@peek/peek_core_user"
import { BehaviorSubject } from "rxjs"

@Component({
    selector: "header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    showSearch$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    
    get showSearch() {
        return this.showSearch$.getValue()
    }
    
    set showSearch(value) {
        this.showSearch$.next(value)
    }
    
    constructor(
        public vortexStatusService: VortexStatusService,
        private headerService: HeaderService,
        private loggedInGuard: LoggedInGuard,
        public navBackService: NavBackService,
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


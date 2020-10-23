import { Component } from "@angular/core"
import {
    IHeaderLink,
    NgLifeCycleEvents,
    HeaderService
} from "@synerty/peek-plugin-base-js"
import { VortexStatusService } from "@synerty/vortexjs"
import { LoggedInGuard } from "@peek/peek_core_user"

@Component({
    selector: "header-component",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})
export class HeaderComponent extends NgLifeCycleEvents {
    title: string = "Peek"
    isEnabled: boolean = true
    vortexIsOnline: boolean = false
    showSearch = false
    
    private leftLinks = []
    private rightLinks = []
    
    constructor(
        vortexStatusService: VortexStatusService,
        headerService: HeaderService,
        private loggedInGuard: LoggedInGuard
    ) {
        super()
        this.leftLinks = headerService.leftLinksSnapshot
        this.rightLinks = headerService.rightLinksSnapshot
        
        headerService.title.takeUntil(this.onDestroyEvent)
            .subscribe(v => this.title = v)
        
        headerService.isEnabled.takeUntil(this.onDestroyEvent)
            .subscribe(v => this.isEnabled = v)
        
        headerService.leftLinks.takeUntil(this.onDestroyEvent)
            .subscribe(v => this.leftLinks = v)
        
        headerService.rightLinks.takeUntil(this.onDestroyEvent)
            .subscribe(v => this.rightLinks = v)
        
        vortexStatusService.isOnline.takeUntil(this.onDestroyEvent)
            .subscribe(v => this.vortexIsOnline = v)
    }
    
    linkTitle(title: IHeaderLink) {
        if (title.badgeCount == null) {
            return title.text
        }
        
        if (title.left) {
            return `${title.text} (${title.badgeCount})`
        }
        
        return `(${title.badgeCount}) ${title.text}`
        
    }
    
    showSearchClicked(): void {
        if (this.showSearch == true) {
            this.showSearch = false
            return
        }
        
        const canActivate: any = this.loggedInGuard.canActivate()
        if (canActivate === true)
            this.showSearch = true
        else if (canActivate.then != null)
            canActivate.then((val: boolean) => this.showSearch = val)
    }
}


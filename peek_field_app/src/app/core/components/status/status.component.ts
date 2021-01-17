import { ChangeDetectionStrategy, Component } from "@angular/core"
import { HeaderService } from "@synerty/peek-plugin-base-js"
import { NgLifeCycleEvents, VortexStatusService } from "@synerty/vortexjs"
import { BehaviorSubject } from "rxjs"
import { Plugins } from "@capacitor/core"

const {Network} = Plugins

@Component({
    selector: "status-component",
    templateUrl: "status.component.html",
    styleUrls: ["status.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent extends NgLifeCycleEvents {
    isOnline$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    isVortexOnline$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    
    constructor(
        public vortexStatusService: VortexStatusService,
        public headerService: HeaderService,
    ) {
        super()
    }
    
    get isOnline() {
        return this.isOnline$.getValue()
    }
    
    set isOnline(value) {
        this.isOnline$.next(value)
    }
    
    get isVortexOnline() {
        return this.isVortexOnline$.getValue()
    }
    
    set isVortexOnline(value) {
        this.isVortexOnline$.next(value)
    }
    
    ngOnInit() {
        Network.addListener("networkStatusChange", (status) => {
            this.isOnline = status.connected
        })
        this.vortexStatusService.isOnline
            .takeUntil(this.onDestroyEvent)
            .subscribe(value => this.isVortexOnline = value)
    }
}


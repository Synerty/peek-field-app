import { Component } from "@angular/core"
import { VortexService, VortexStatusService } from "@synerty/vortexjs"
import { DeviceStatusService } from "@peek/peek_core_device"
import { BalloonMsgService } from "@synerty/peek-plugin-base-js"

@Component({
    selector: "peek-main-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent {
    fullScreen = false
    
    constructor(
        public balloonMsg: BalloonMsgService,
        private vortexService: VortexService,
        private vortexStatusService: VortexStatusService,
        private deviceStatusService: DeviceStatusService
    ) {
    }
    
    setBalloonFullScreen(enabled: boolean): void {
        this.fullScreen = enabled
    }
    
    showLoading(): boolean {
        return this.deviceStatusService.isLoading
    }
}


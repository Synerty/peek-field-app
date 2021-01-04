import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
// Enable the use of workers for the payload
import { VortexService } from "@synerty/vortexjs"
// Potentially enable angular prod mode
import { enableProdMode } from "@angular/core"
import { environment } from "./environments/environment"
import { AppModule } from "./app/app.module"

const protocol = location.protocol.toLowerCase() === "https:" ? "wss" : "ws"

VortexService.setVortexUrl(`${protocol}://${location.hostname}:${location.port}/vortexws`)
VortexService.setVortexClientName("peek-field-app")

// Payload.setWorkerDelegate(new PayloadDelegateWeb());

if (environment.production) {
    enableProdMode()
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)

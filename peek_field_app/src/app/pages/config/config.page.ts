import { ChangeDetectionStrategy, Component } from "@angular/core"
import { HeaderService } from "@synerty/peek-plugin-base-js"
import { configLinks } from "@_peek/plugin-config-links"

@Component({
    selector: "config-page",
    templateUrl: "config.page.html",
    styleUrls: ["config.page.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigPage {
    configLinks = configLinks
    
    constructor(headerService: HeaderService) {
        headerService.setTitle("Peek Config")
    }
}


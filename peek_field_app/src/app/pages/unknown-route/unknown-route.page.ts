import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
    selector: "unknown-route-page",
    templateUrl: "unknown-route.page.html",
    styleUrls: ["unknown-route.page.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnknownRoutePage {
}

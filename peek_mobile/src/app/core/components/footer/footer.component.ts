import { ChangeDetectionStrategy, Component } from "@angular/core"
import { HeaderService, IHeaderLink } from "@synerty/peek-plugin-base-js"
import { filter } from "rxjs/operators"
import { homeLinks } from "@_peek/plugin-home-links"
import { BehaviorSubject } from "rxjs"

@Component({
    selector: "footer-component",
    templateUrl: "footer.component.html",
    styleUrls: ["footer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    sosEnabled$ = this.headerService.links$.pipe(
        filter((links: IHeaderLink[]) =>
            !!links.find((link: IHeaderLink) =>
                link.plugin === "peek_plugin_pof_chat"))
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
            !!links.find((link: IHeaderLink) =>
                link.plugin === "peek_plugin_inbox"))
    )
    
    constructor(public headerService: HeaderService) {

    }
}


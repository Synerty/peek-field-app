import {
    BalloonMsgService,
    FooterService,
    NavBackService,
    TitleService
} from "@synerty/peek-plugin-base-js"
import { VortexService, VortexStatusService } from "@synerty/vortexjs"
import { titleBarLinks } from "@peek/plugin-title-bar-links"

export function titleServiceFactory() {
    const service = new TitleService()
    service.setLinks(titleBarLinks)
    return service
}

export function footerServiceFactory() {
    const service = new FooterService()
    service.setLinks([])
    return service
}

export let peekRootServices = [
    BalloonMsgService,
    {
        provide: TitleService,
        useFactory: titleServiceFactory
    },
    {
        provide: FooterService,
        useFactory: footerServiceFactory
    },
    NavBackService,
    VortexStatusService,
    VortexService,
]


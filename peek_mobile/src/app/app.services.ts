import {
    BalloonMsgService,
    FooterService,
    NavBackService,
    HeaderService
} from "@synerty/peek-plugin-base-js"
import { VortexService, VortexStatusService } from "@synerty/vortexjs"
import { titleBarLinks } from "@_peek/plugin-title-bar-links"

export function headerServiceFactory() {
    const service = new HeaderService()
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
        provide: HeaderService,
        useFactory: headerServiceFactory
    },
    {
        provide: FooterService,
        useFactory: footerServiceFactory
    },
    NavBackService,
    VortexStatusService,
    VortexService,
]


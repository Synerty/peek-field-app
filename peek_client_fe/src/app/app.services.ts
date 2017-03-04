import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-client-fe-util";
import {titleBarLinks} from "./plugin-title-bar-links";


export let peekRootServices = [
    {
        provide: TitleService,
        useValue: new TitleService(titleBarLinks)
    },
    Ng2BalloonMsgService,

    // Vortex Services
    VortexStatusService,
    VortexService
];


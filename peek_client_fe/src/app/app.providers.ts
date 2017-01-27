import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-client-fe-util";


export let peekRootProviders = [TitleService, Ng2BalloonMsgService,
    // Vortex Services
    VortexStatusService, VortexService
];


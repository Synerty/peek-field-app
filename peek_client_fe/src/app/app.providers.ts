import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";
import {VortexService, VortexStatusService} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-client-fe-util";
import {LoggedInGuard} from "./peek_plugin_pof_field_switching/userdb/logged-in.guard";
import {LoggedOutGuard} from "./peek_plugin_pof_field_switching/userdb/logged-out.guard";
import {UserService} from "./peek_plugin_pof_field_switching/userdb/user.service";
import {ProfileService} from "./peek_plugin_pof_field_switching/userdb/profile.service";


export let peekRootProviders = [TitleService, Ng2BalloonMsgService,
    // User Services
    LoggedInGuard, LoggedOutGuard, UserService, ProfileService,
    // Vortex Services
    VortexStatusService, VortexService
];


import {MainMenuComponent} from "./main-menu/main-menu.component";
import {MainHomeComponent} from "./main-home/main-home.component";
import {UnknownRouteComponent} from "./unknown-route.component";
export const routes = [
    {
        path: "",
        component: MainHomeComponent,
        data: {title: "Home"}
    },
    {
        path: 'menu',
        component: MainMenuComponent,
        data: {title: "Menu"}
    },
    {
        path: 'test',
        loadChildren: "peek_plugin_pof_field_switching/plugin-pof-field-switching.module#default",
        data: {title: "Switching"}
    },
    {
        path: "**",
        component: UnknownRouteComponent,
        data: {title: "Route Error"}
    }
];
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {MainHomeComponent} from "./main-home/main-home.component";
import {UnknownRouteComponent} from "./unknown-route/unknown-route.component";
import {pluginRoutes} from "./plugin-routes";
export const staticRoutes = [
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
    ...pluginRoutes,
    {
        path: "**",
        component: UnknownRouteComponent,
        data: {title: "Route Error"}
    }
];
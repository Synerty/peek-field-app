import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {pluginRoutes} from "../PluginRoutes";

const staticRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: []
    },
    {
        path: '**',
        component: HomeComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot([ ...pluginRoutes, ...staticRoutes])],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

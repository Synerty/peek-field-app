import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {pluginRoutes} from "./plugin-routes";

const staticRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data : {title:"App Home Route"},
        children: []
    },
    {
        path: '**',
        component: HomeComponent,
        data : {title:"App catch all route"}

    }
];

@NgModule({
    imports: [RouterModule.forRoot([ ...pluginRoutes, ...staticRoutes])],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

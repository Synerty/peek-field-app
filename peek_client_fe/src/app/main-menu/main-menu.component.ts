import {PeekComponent} from "@synerty/peek-web-ns";
import {Router} from "@angular/router";

let links = [{
    name: "Home",
    path: "/"
}, {
    name: "Switching",
    path: "/peek_plugin_pof_field_switching"
}, {
    name: "Noop",
    path: "/peek_plugin_noop"
}, {
    name: "Switching Test",
    path: "/peek_plugin_pof_field_switching/swtest"
}];

@PeekComponent({
    selector: "peek-main-menu",
    templateUrl: "main-menu.component.web.html",
    moduleFilename: module.filename
})
export class MainMenuComponent {


    menuItems = links;
    tappedLabel = "test";

    constructor(private router: Router) {

    }

    itemSelected(item) {
        this.tappedLabel = item.name;
        this.router.navigate([item.path]);
    }
}
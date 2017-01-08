import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

let links = [{
    name: "Home",
    path: "/"
}, {
    name: "Switching",
    path: "/test"
}, {
    name: "Switching Test",
    path: "/test/swtest"
}];

@Component({
    selector: "peek-main-menu",
    templateUrl: "main-menu/main-menu.component.ns.html",
})
export class MainMenuComponent {


    menuItems = links;
    tappedLabel = "test";

    constructor(private routerExtensions:RouterExtensions) {

    }

    onItemTap(event) {
        this.tappedLabel = this.menuItems[event.index].name;
        this.routerExtensions.navigate([this.menuItems[event.index].path]);
    }

}


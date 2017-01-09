import {PeekComponent} from "@synerty/peek-web-ns";

@PeekComponent({
    selector: "peek-main-home",
    templateUrl: 'main-home.component.web.html',
    moduleFilename : module.filename
})
export class MainHomeComponent {
    testMsg: string = "Unified home Update2";

}

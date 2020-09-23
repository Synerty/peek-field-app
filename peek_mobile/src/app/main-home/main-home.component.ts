import { Component, OnInit } from "@angular/core"
import { NgLifeCycleEvents, TitleService } from "@synerty/peek-plugin-base-js"
import { homeLinks } from "@peek/plugin-home-links"

@Component({
    selector: "peek-main-home",
    templateUrl: "main-home.component.web.html",
    styleUrls: ["main-home.component.web.scss"],
    moduleId: module.id
})
export class MainHomeComponent extends NgLifeCycleEvents implements OnInit {
    appDetails = homeLinks
    appButtonGridColumns = 3
    
    constructor(titleService: TitleService) {
        super()
        titleService.setTitle("Peek Home")
        
    }
    
    ngOnInit() {
    }
    
    appButtonGridRows(): string {
        let val = "auto"
        for (let i = 0; i < this.appDetails.length / this.appButtonGridColumns; i++) {
            val += ", auto"
        }
        return val
    }
    
    appButtonGridRowIndex(index): number {
        return Math.floor(index / this.appButtonGridColumns)
    }
    
}


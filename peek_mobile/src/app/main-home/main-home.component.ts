import {Component, OnInit} from "@angular/core";
import {
  ComponentLifecycleEventEmitter,
  Tuple,
  TupleDataOfflineObserverService,
  TupleSelector
} from "@synerty/vortexjs";
import {TitleService} from "@synerty/peek-mobile-util";
import {homeLinks} from "../../plugin-home-links";


@Component({
  selector: "peek-main-home",
  templateUrl: 'main-home.component.web.html',
  moduleId: module.id
})
export class MainHomeComponent extends ComponentLifecycleEventEmitter implements OnInit {

  appDetails = homeLinks;
  myParseInt = parseInt;

  constructor(tupleDataObserver: TupleDataOfflineObserverService, titleService: TitleService) {
    super();
    titleService.setTitle("Peek Home");

  }

  ngOnInit() {
  }

  appButtonGridRows(): string {
    let val = "";
    for (let i = 0; i < parseInt(String(this.appDetails.length), 2); i++) {
      val += ",auto";
    }
    return val;
  }

}

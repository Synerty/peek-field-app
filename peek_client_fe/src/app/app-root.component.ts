import { Component, OnInit } from '@angular/core';

let mobileHtml = '<app-mobile-container></app-mobile-container>';
let desktopHtml = '<app-mobile-container></app-mobile-container>';
let nativeScriptHtml = '<app-mobile-container></app-mobile-container>';

@Component({
  selector: 'app-root',
  template: mobileHtml
})
export class AppRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

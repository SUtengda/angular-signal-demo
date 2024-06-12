import { Component, OnInit } from '@angular/core';
import { cdLog } from 'src/app/utils/change-detection';

@Component({
  selector: 'app-zone-js-demo',
  host: {
    class: "wrapper"
  },
  template: `
  <ng-container *ngIf="cdLog('zone-js')"></ng-container>
   <p>
  		zone-js-demo Works!
   </p>
   <button (click)="({})">Zone js</button>
   <app-level-A-one></app-level-A-one>
   <app-level-A-two></app-level-A-two>
   <footer>
   Source : <a href="https://www.youtube.com/watch?v=lmrf_gPIOZU">WTF is "Zone.js" and is it making your app slow?</a> 
   </footer>
  `,

})
export class ZoneJsDemoComponent implements OnInit {
  cdLog = cdLog;
  constructor() { }

  ngOnInit() {

  }

}

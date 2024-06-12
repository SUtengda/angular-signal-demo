import { Component, OnInit } from '@angular/core';
import { cdLog } from 'src/app/utils/change-detection';

@Component({
  selector: 'app-level-A-one',
  host: {
    class: "wrapper"
  },
  template: `
   <ng-container *ngIf="cdLog('=>level-A-one')"></ng-container> 
   <p>
  		level-A-one Works!
   </p>
   <button (click)="({})">level-A-one</button>
  `,
  styles: [":host {margin-bottom: 10px}"]
})
export class LevelAOneComponent implements OnInit {
  cdLog = cdLog;
  constructor() { }

  ngOnInit() {
  }

}

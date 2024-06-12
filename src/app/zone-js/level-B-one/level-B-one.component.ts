import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { cdLog } from 'src/app/utils/change-detection';

@Component({
  selector: 'app-level-B-one',
  host: {
    class: "wrapper"
  },
  template: `
  <ng-container *ngIf="cdLog('==>level-B-one')" ></ng-container>
   <p>
  		level-B-one Works!
   </p>
   {{count}}
   <br />
   <button (click)="increment()">increment count</button>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelBOneComponent implements OnInit {
  cdLog=cdLog;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.count++;
  }

}

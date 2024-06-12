import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { cdLog } from 'src/app/utils/change-detection';

@Component({
  selector: 'app-level-A-two',
  host: {
    class: "wrapper"
  },
  template: `
    <ng-container *ngIf="cdLog('=>level-A-two')"></ng-container>
    <p>
  		level-A-two Works!
    </p>
    <button (click)="({})">level-A-two</button>
    <app-level-B-one></app-level-B-one>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelATwoComponent implements OnInit {
  cdLog = cdLog;
  constructor() { }

  ngOnInit() {
  }

}

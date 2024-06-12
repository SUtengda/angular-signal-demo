import { Component, signal } from "@angular/core";
import { countSignal } from "../utils/signal-demo";

@Component({
  selector: "app-signal-demo",
  template: `
    <ng-container *ngIf="signalDemoCD()"></ng-container>
    <h2>Signal Demo</h2>

    <div>
      count: {{count()}}
    </div>
    <app-double-count></app-double-count>
    <button (click)="incrementCount()">increment count</button>
    

    <hr>

    <app-todo-list></app-todo-list>

    <b>Signals are only the first step on the path to being able to remove zone.js completely from a compatible app.</b>
    <br>
    <b>Signal-Based Components, which would be a further step towards being able to accomplish a zoneless Angular app.</b>
  `
})
export class SignalDemoComponent {
  count = countSignal;

  constructor() {
    console.log('The count is: ' + this.count());
  }

  signalDemoCD() {
    console.log("app-signal-demo change detection")
  }
  incrementCount() {
    this.count.update(value => value + 1);
  }

}
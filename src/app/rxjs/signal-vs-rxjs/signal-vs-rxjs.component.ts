import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal-vs-rxjs',
  template: `
   <div class="container">
    <app-signal-version></app-signal-version>
    <app-rxjs-version></app-rxjs-version>
   </div>
   <footer>
    Source : <a href="https://www.youtube.com/watch?v=iA6iyoantuo">Why didn't the Angular team just use RxJS instead of Signals?</a> 
   </footer>
  `,
  styles: [
    `.container {
      display: flex;
      gap: 5px;
    }`
  ]
})
export class SignalVsRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

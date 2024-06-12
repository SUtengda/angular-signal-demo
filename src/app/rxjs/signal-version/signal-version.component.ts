import { Component, Injector, OnInit, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-version',
  host: {
    class: "wrapper flex-1"
  },
  template: `
   <h2>
  		signal-version Works!
   </h2>
   <div>Access count value: {{count()}}</div>
   <button (click)="increment()">increment</button>

   <hr>
   <div>derivedValue value: {{derivedValue()}}</div>
   <button (click)="changeValue()">update</button>

  `,
  styles: []
})
export class SignalVersionComponent implements OnInit {
  count: WritableSignal<number> = signal(0);
  doubleCount = computed(() => this.count()*2);

  increment() {
    this.count.update(value => value + 1);
  }
  constructor(
    private injector: Injector
  ) {
    effect(() => {
      console.log(`%c signal double count is: ${this.doubleCount()}`, 'color: deeppink')
    })
  }

  ngOnInit() {
    // effect(() => {
    //   console.log(`The count is: ${this.count()}`);
    // }, {injector: this.injector});
  }


  countOne: WritableSignal<number> = signal(1);
  countTwo: WritableSignal<number> = signal(2);
  countThree: WritableSignal<number> = signal(3);
  derivedValue = computed(() => this.countOne() * this.countTwo() * this.countThree());

  changeValue() {
    this.countOne.set(2);
    this.countTwo.set(20);
  }
}

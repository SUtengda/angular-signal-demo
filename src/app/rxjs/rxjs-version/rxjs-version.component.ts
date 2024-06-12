import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rxjs-version',
  host: {
    class: "wrapper flex-1",
  },
  template: `
   <h2>
  		rxjs-version Works!
   </h2>

   <div>Access count value: {{count | async }}</div>
   <!-- <div>Count: {{count.getValue() }}</div> -->
   <button (click)="increment()">increment</button>


   <hr>
   <div>derivedValue value: {{derivedValue | async}}</div>
   <button (click)="changeValue()">update</button>

  `,
  styles: []
})
export class RxjsVersionComponent implements OnInit, OnDestroy {
  count: BehaviorSubject<number> = new BehaviorSubject(0);
  doubleCount: Observable<number> = this.count.pipe(map((count) => count * 2));

  increment() {
    this.count.next(this.count.getValue() + 1);
  }
  constructor() {
    
  }


  destroy$ = new Subject<void>();
  ngOnInit() {
    this.doubleCount
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => console.log(`%c BehaviorSubject double count is ${value}`, 'color: dodgerblue'))
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }


  countOne: BehaviorSubject<number> = new BehaviorSubject(1);
  countTwo: BehaviorSubject<number> = new BehaviorSubject(2);
  countThree: BehaviorSubject<number> = new BehaviorSubject(3);
  derivedValue = combineLatest([this.countOne, this.countTwo, this.countThree]).pipe(map(([one, two, three]) => one * two * three));

  changeValue() {
    this.countOne.next(2);
    this.countTwo.next(20);
  }

}

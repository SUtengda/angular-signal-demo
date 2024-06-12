import { Component, OnInit, Signal, computed } from '@angular/core';
import { countSignal } from '../utils/signal-demo';

@Component({
  selector: 'app-double-count',
  template: `
   <p>
  		double-count: {{doubleCount()}}
   </p>
  `,
  styles: []
})
export class DoubleCountComponent implements OnInit {

  doubleCount: Signal<number> = computed(() => countSignal() * 2);
  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneJsDemoComponent } from './zone-js/zone-js-demo/zone-js-demo.component';
import { SignalDemoComponent } from './signal/signal-demo.component';
import { SignalVsRxjsComponent } from './rxjs/signal-vs-rxjs/signal-vs-rxjs.component';

const routes: Routes = [
  { path: "zoneJs", component: ZoneJsDemoComponent },
  { path: "signal", component: SignalDemoComponent },
  { path: "signalVsRxjs", component: SignalVsRxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

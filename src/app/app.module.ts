import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelAOneComponent } from './zone-js/level-A-one/level-A-one.component';
import { LevelATwoComponent } from './zone-js/level-A-two/level-A-two.component';
import { ZoneJsDemoComponent } from './zone-js/zone-js-demo/zone-js-demo.component';
import { LevelBOneComponent } from './zone-js/level-B-one/level-B-one.component';
import { TodoListComponent } from './signal/todo-list.component';
import { SignalDemoComponent } from './signal/signal-demo.component';
import { DoubleCountComponent } from './signal/double-count.component';
import { SignalVersionComponent } from './rxjs/signal-version/signal-version.component';
import { RxjsVersionComponent } from './rxjs/rxjs-version/rxjs-version.component';
import { SignalVsRxjsComponent } from './rxjs/signal-vs-rxjs/signal-vs-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneJsDemoComponent,
    LevelAOneComponent,
    LevelATwoComponent,
    LevelBOneComponent,
    SignalDemoComponent,
    DoubleCountComponent,
    TodoListComponent,
    SignalVsRxjsComponent,
    SignalVersionComponent,
    RxjsVersionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

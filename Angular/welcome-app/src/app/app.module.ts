import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { Child1 } from './child1.component';

@NgModule({
  declarations: [
    AppComponent, // all components
    ChildComponent,
    Child1
  ],
  imports: [
    BrowserModule, // output in browser
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // first or parent module
})
export class AppModule { }

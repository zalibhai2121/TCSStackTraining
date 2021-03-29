import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeService } from './fake.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeRetrieveComponent } from './employee-retrieve/employee-retrieve.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EmployeeRetrieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

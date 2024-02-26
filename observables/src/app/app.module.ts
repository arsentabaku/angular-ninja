import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { FormEventsComponent } from './form-events/form-events.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromiseVsObservableComponent,
    AccountSummaryComponent,
    FormEventsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { UI_MODULES } from './ui-materials';
import { AnalyticsModule } from './analytics/analytics.module';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AnalyticsModule,
    AccountsModule,
    UI_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

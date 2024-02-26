import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { FormEventsComponent } from './form-events/form-events.component';
import { HomeComponent } from './home/home.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'promise-vs-observable', component: PromiseVsObservableComponent },
  { path: 'account-summary', component: AccountSummaryComponent },
  { path: 'form-events', component: FormEventsComponent },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./rxjs/rxjs.module').then((m) => m.SubjectsRxjsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { AccountsSummaryComponent } from './components/accounts/accounts-summary/accounts-summary.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './components/accounts/account-create/account-create.component';

const routes: Routes = [
  { path: 'summary', component: AccountsSummaryComponent },
  { path: 'create', component: AccountCreateComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}

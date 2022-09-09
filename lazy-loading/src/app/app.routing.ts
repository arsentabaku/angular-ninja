import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembersSummaryComponent } from './accounts/components/members/members-summary/members-summary.component';
import { AccountOverviewComponent } from './accounts/components/accounts/account-overview/account-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
  { path: 'members', component: MembersSummaryComponent },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'accounts/:accountId',
    component: AccountOverviewComponent,
  },
  {
    path: 'legal-doc',
    loadChildren: () =>
      import('./legal-documents/legal-documents.module').then(
        (m) => m.LegalDocumentsModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '**',
    redirectTo: 'analytics',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

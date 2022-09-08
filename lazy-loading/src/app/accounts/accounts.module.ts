import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UI_MODULES } from '../ui-materials';
import { AccountOverviewComponent } from './components/accounts/account-overview/account-overview.component';
import { AccountCreateComponent } from './components/accounts/account-create/account-create.component';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';
import { MembersSummaryComponent } from './components/members/members-summary/members-summary.component';
import { MemberOverviewComponent } from './components/members/member-overview/member-overview.component';
import { AccountMemberComponent } from './components/account-member/account-member/account-member.component';
import { AccountsSummaryComponent } from './components/accounts/accounts-summary/accounts-summary.component';
import { AccountRoutingModule } from './accounts.routing';

@NgModule({
  declarations: [
    AccountOverviewComponent,
    AccountCreateComponent,
    MemberCreateComponent,
    MembersSummaryComponent,
    MemberOverviewComponent,
    AccountMemberComponent,
    AccountsSummaryComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, UI_MODULES],
})
export class AccountsModule {}

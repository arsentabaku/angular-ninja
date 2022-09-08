import { Component } from '@angular/core';
import { AccountsService } from 'src/app/accounts/services/accounts.service';

@Component({
  selector: 'app-accounts-summary',
  templateUrl: './accounts-summary.component.html',
  styleUrls: ['./accounts-summary.component.scss'],
})
export class AccountsSummaryComponent {
  constructor(private accountsService: AccountsService) {}
}

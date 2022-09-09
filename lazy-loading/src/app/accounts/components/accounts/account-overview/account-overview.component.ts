import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/accounts/models/account.model';
import { AccountsService } from 'src/app/accounts/services/accounts.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
})
export class AccountOverviewComponent implements OnInit {
  public accountDetails: Account;

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) {}

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = routeParams.get('accountId');
    console.log(accountIdFromRoute);

    this.accountDetails = await this.accountsService.getAccountByAccountId(
      accountIdFromRoute
    );
    console.log(this.accountDetails.id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, AccountSummary } from '../models/account.model';
import { ACCOUNT_API } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  public getAccounts(): Promise<AccountSummary[]> {
    const apiUrl = `/test/${ACCOUNT_API}/report/account?page=1&pageSize=500`;
    return this.http.get<AccountSummary[]>(apiUrl).toPromise();
  }

  public getAccountByAccountId(accountId: string): Promise<Account> {
    const apiUrl = `/test/${ACCOUNT_API}/account/${accountId}`;
    return this.http.get<Account>(apiUrl).toPromise();
  }
}

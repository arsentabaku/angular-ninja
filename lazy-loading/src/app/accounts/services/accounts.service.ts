import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';
import { ACCOUNT_API } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  public getAccounts(): Promise<Account[]> {
    const apiUrl = `/test/${ACCOUNT_API}/report/account?page=1&pageSize=500`;
    return this.http.get<Account[]>(apiUrl).toPromise();
  }
}

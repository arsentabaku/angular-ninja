import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  public getAccounts(): Promise<Account[]> {
    let url1 = 'https://jsonplaceholder.typicode.com/users';
    let url2 = '/test/vrplayer-api/vrplayer/project/72e54e?appKey=com.vrdirect';
    let url3 = '/test/account-api/report/account?page=1&pageSize=500';

    // return this.http.get(url3);
    return this.http.get<Account[]>(url3).toPromise();
  }
}

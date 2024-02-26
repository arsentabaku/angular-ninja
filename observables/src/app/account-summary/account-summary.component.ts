import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

interface AccountSummary {
  accountId: string;
  companyName: string;
  createdOn: string;
  isActive: boolean;
  licenseId: string;
  sourceIntegrationSource: string;
  tags: string[];
}

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  public loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const request = this.getAccountsAsObservable();
    this.setLoadingSpinner(request);

    request.subscribe((data) => {
      console.log(data);
    });
  }

  public setLoadingSpinner(observable: Observable<any>) {
    observable.subscribe(() => (this.loading = false));
  }

  public getAccountsAsObservable(): Observable<AccountSummary[]> {
    const apiUrl = `/test/account-api/report/account?page=1&pageSize=500`;
    return this.http.get<AccountSummary[]>(apiUrl).pipe(share())
  }
}

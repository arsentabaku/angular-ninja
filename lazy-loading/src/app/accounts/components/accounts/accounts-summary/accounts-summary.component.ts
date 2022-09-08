import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/accounts/models/account.model';
import { AccountsService } from 'src/app/accounts/services/accounts.service';

@Component({
  selector: 'app-accounts-summary',
  templateUrl: './accounts-summary.component.html',
  styleUrls: ['./accounts-summary.component.scss'],
})
export class AccountsSummaryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  accountsList = new MatTableDataSource<Account>();
  public displayedColumns: string[] = [
    'companyName',
    'createdOn',
    'isActive',
    'licenseId',
    'sourceIntegrationSource',
    'tags',
  ];

  constructor(private accountsService: AccountsService) {}

  async ngOnInit(): Promise<void> {
    this.accountsList.data = await this.accountsService.getAccounts();
    this.accountsList.paginator = this.paginator;
    this.accountsList.sort = this.sort;
    // console.log(this.accounts);
    // this.getData().subscribe((acc) => {
    //   this.accounts = acc;
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.accountsList.filter = filterValue.trim().toLowerCase();
  }
}

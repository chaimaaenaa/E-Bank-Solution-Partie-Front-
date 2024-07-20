import { Component, OnInit } from '@angular/core';
import {Account} from "../modeles/account";
import {AccountService} from "../service/account.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  standalone: true,
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts().subscribe(
      data => {
        this.accounts = data;
      },
      error => {
        console.error('Error fetching accounts', error);
      }
    );
  }
}

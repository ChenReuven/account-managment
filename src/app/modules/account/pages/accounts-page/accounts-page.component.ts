import { Component, OnInit } from "@angular/core";
import { Account } from "../../data/models/account.model";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  selectedAccount: Account;

  constructor() {}

  ngOnInit(): void {}

  onRowSelected(row: Account) {
    this.selectedAccount = row;
  }
}

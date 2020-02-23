import { Component, OnInit } from "@angular/core";
import { Account } from "../../data/models/account.model";
import { accountsMock } from "../../data/mocks/accounts.mock";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  accountsMock: Account[] = accountsMock;

  displayedColumns: string[] = ["select", "userName", "mail", "role"];
  dataSource = new MatTableDataSource<Account>(accountsMock);
  selection = new SelectionModel<Account>(false, []);

  constructor() {}

  ngOnInit(): void {}

  onRowClicked(row: Account) {
    console.log(row);
    this.selection.toggle(row);
  }
}

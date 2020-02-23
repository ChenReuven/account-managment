import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Account } from "../../data/models/account.model";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { accountsMock } from "../../data/mocks/accounts.mock";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  @Output() selected = new EventEmitter<Account>();
  displayedColumns: string[] = ["select", "userName", "mail", "role"];
  dataSource = new MatTableDataSource<Account>(accountsMock);
  selection = new SelectionModel<Account>(false, []);

  constructor() {}

  ngOnInit(): void {}

  onSelected(row: Account) {
    this.selection.toggle(row);
    const [selection] = this.selection.selected;
    this.selected.emit(selection);
  }
}

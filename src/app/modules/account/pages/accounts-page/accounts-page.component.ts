import { Component } from "@angular/core";
import { Account } from "../../data/models/account.model";
import { AccountDialogComponent } from "../../components/dialogs/account-dialog/account-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent {
  selectedAccount: Account;

  constructor(private dialog: MatDialog) {
  }

  onRowSelected(row: Account) {
    this.selectedAccount = row;
  }

  onAddUser() {
    this.openDialog();
  }

  onAddAdmin() {
    this.openDialog();
  }

  onEditAccount(account: Account) {
    this.openDialog(account);
  }

  openDialog(selectedAccount?: Account): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}

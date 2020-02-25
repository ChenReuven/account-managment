import { Component } from "@angular/core";
import { Account } from "../../data/models/account.model";
import { AccountDialogComponent } from "../../components/dialogs/account-dialog/account-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { UpdateAccount } from "../../data/dto/update-account.dto";
import { RoleType } from "../../data/models/role-type.enum";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent {
  selectedAccount: Account;

  constructor(private dialog: MatDialog) {}

  onRowSelected(row: Account) {
    this.selectedAccount = row;
  }

  onAddUser() {
    this.openDialog(RoleType.USER);
  }

  onAddAdmin() {
    this.openDialog(RoleType.ADMIN);
  }

  onEditAccount(account: Account) {
    this.openDialog(account.role, account);
  }

  openDialog(roleType: RoleType, selectedAccount?: Account): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: "500px",
      data: {
        selectedAccount,
        roleType
      }
    });

    dialogRef.afterClosed().subscribe((result: UpdateAccount) => {
      if (result) {
        const updateAccountDto: UpdateAccount = result;
        console.log(
          "%c Account Value For Send To Server = ",
          "background: #222; color: #bada55; font-size: 16px;",
          updateAccountDto
        );
        // TODO: In real app we will move the value to data layer that call to server
      }
    });
  }
}

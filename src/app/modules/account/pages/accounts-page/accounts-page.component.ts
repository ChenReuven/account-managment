import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Account } from "../../data/models/account.model";
import { AccountDialogComponent } from "../../components/dialogs/account-dialog/account-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { UpdateAccount } from "../../data/dto/update-account.dto";
import { RoleType } from "../../data/models/role-type.enum";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsPageComponent implements OnDestroy {
  selectedAccount: Account;
  dialogSubscription: Subscription;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  onRowSelected(row: Account): void {
    this.selectedAccount = row;
  }

  onAddUser(): void {
    this.openDialog(RoleType.USER);
  }

  onAddAdmin(): void {
    this.openDialog(RoleType.ADMIN);
  }

  onEditAccount(account: Account): void {
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

    this.dialogSubscription = dialogRef
      .afterClosed()
      .subscribe((result: UpdateAccount) => {
        if (result) {
          const updateAccountDto: UpdateAccount = result;
          this.openSnackBar(
            "Please Open Dev Tools (F12) To See The Value",
            "Close"
          );
          console.log(
            "%c Account Value For Send To Server = ",
            "background: #222; color: #bada55; font-size: 16px;",
            updateAccountDto
          );
          // TODO: In real app we will move the value to data layer that call to server
        }
      });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  ngOnDestroy(): void {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }
}

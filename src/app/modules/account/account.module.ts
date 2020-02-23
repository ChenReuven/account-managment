import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsPageComponent } from "./pages/accounts-page/accounts-page.component";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { AccountActionsComponent } from "./components/account-actions/account-actions.component";
import { AccountListComponent } from "./components/account-list/account-list.component";
import { AccountDialogComponent } from "./components/dialogs/account-dialog/account-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AccountsPageComponent,
    AccountActionsComponent,
    AccountListComponent,
    AccountDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AccountModule {}

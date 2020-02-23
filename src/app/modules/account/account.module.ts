import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsPageComponent } from "./pages/accounts-page/accounts-page.component";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [AccountsPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTableModule, MatCheckboxModule]
})
export class AccountModule {}

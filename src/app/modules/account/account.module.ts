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
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { AccountStepperComponent } from "./components/account-stepper/account-stepper.component";
import { SafeStepComponent } from "./components/account-stepper/steps/safe-step/safe-step.component";
import { AccountDetailsStepComponent } from "./components/account-stepper/steps/account-details-step/account-details-step.component";
import { AdminGroupsStepComponent } from "./components/account-stepper/steps/admin-groups-step/admin-groups-step.component";

@NgModule({
  declarations: [
    AccountsPageComponent,
    AccountActionsComponent,
    AccountListComponent,
    AccountDialogComponent,
    AccountStepperComponent,
    SafeStepComponent,
    AccountDetailsStepComponent,
    AdminGroupsStepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule
  ]
})
export class AccountModule {}

import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RoleType } from "../../../../data/models/role-type.enum";

@Component({
  selector: "app-account-details-step",
  templateUrl: "./account-details-step.component.html",
  styleUrls: ["./account-details-step.component.scss"]
})
export class AccountDetailsStepComponent {
  @Input() accountFormGroup: FormGroup;
  accountRoleType: RoleType;
  RoleType = RoleType;
}

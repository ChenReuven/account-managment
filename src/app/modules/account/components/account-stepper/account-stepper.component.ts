import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Account } from "../../data/models/account.model";
import { AdminGroup } from "../../data/models/admin-group.model";
import { Safe } from "../../data/models/safe.model";
import { RoleType } from "../../data/models/role-type.enum";

@Component({
  selector: "app-account-stepper",
  templateUrl: "./account-stepper.component.html",
  styleUrls: ["./account-stepper.component.scss"]
})
export class AccountStepperComponent implements OnInit {
  @Input() safeList: Safe[];
  @Input() adminGroups: AdminGroup[];
  @Input() selectedAccount: Account;
  accountFormGroup: FormGroup;
  accountRoleType: RoleType;
  RoleType = RoleType;

  devMode: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.accountRoleType = this.selectedAccount?.role ?? RoleType.USER;
    this.accountFormGroup = this.formBuilder.group({
      safeId: [this.selectedAccount?.safeId || "", Validators.required],
      adminGroup: [
        this.selectedAccount?.additionalInfo?.administratorGroupId || "",
        Validators.required
      ], // Maybe add it dynamic
      details: this.formBuilder.group({
        userName: [
          this.selectedAccount?.userName || "",
          Validators.compose([Validators.maxLength(60), Validators.required])
        ],
        password: [this.selectedAccount?.password || "", Validators.required],
        mail: [
          this.selectedAccount?.mail || "",
          Validators.compose([Validators.required, Validators.email])
        ]
      })
    });
  }
}

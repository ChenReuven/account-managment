import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { safeListMock } from "../../../data/mocks/safe-list.mock";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-account-dialog",
  templateUrl: "./account-dialog.component.html",
  styleUrls: ["./account-dialog.component.scss"]
})
export class AccountDialogComponent implements OnInit {
  accountFormGroup: FormGroup;
  safeList = safeListMock;
  devMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const { selectedAccount } = this.data;
    console.log(`selectedAccount = ${selectedAccount}`);
    this.accountFormGroup = this.formBuilder.group({
      safeId: [selectedAccount?.safeId || "", Validators.required],
      details: this.formBuilder.group({
        userName: [
          selectedAccount?.userName || "",
          Validators.compose([Validators.maxLength(60), Validators.required])
        ],
        password: [selectedAccount?.password || "", Validators.required],
        mail: [selectedAccount?.mail || "", Validators.compose([Validators.required, Validators.email])]
      })
    });
  }

  onSubmit(accountFormGroup: FormGroup) {
    // That value will go to the server via data app layer
    console.log(accountFormGroup.value);
  }
}

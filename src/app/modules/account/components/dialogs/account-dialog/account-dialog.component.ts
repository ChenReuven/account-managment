import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { safeListMock } from "../../../data/mocks/safe-list.mock";

@Component({
  selector: "app-account-dialog",
  templateUrl: "./account-dialog.component.html",
  styleUrls: ["./account-dialog.component.scss"]
})
export class AccountDialogComponent implements OnInit {
  accountFormGroup: FormGroup;
  safeList = safeListMock;
  devMode: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.accountFormGroup = this.formBuilder.group({
      safeId: ["", Validators.required],
      details: this.formBuilder.group({
        userName: [
          "",
          Validators.compose([Validators.maxLength(60), Validators.required])
        ],
        password: ["", Validators.required],
        mail: ["", Validators.compose([Validators.required, Validators.email])]
      })
    });
  }

  onSubmit(accountFormGroup: FormGroup) {
    // That value will go to the server via data app layer
    console.log(accountFormGroup.value);
  }
}

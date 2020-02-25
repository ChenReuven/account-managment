import { Component, Inject, OnInit } from "@angular/core";
import { safeListMock } from "../../../data/mocks/safe-list.mock";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { adminGroupsMock } from "../../../data/mocks/admin-groups.mock";

@Component({
  selector: "app-account-dialog",
  templateUrl: "./account-dialog.component.html",
  styleUrls: ["./account-dialog.component.scss"]
})
export class AccountDialogComponent implements OnInit {
  safeList = safeListMock;
  adminGroups = adminGroupsMock;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}

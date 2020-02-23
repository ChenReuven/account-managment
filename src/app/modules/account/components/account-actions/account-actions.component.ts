import { Component, Input } from "@angular/core";

@Component({
  selector: "app-account-actions",
  templateUrl: "./account-actions.component.html",
  styleUrls: ["./account-actions.component.scss"]
})
export class AccountActionsComponent {
  @Input() selectedItem: Account;
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-account-actions",
  templateUrl: "./account-actions.component.html",
  styleUrls: ["./account-actions.component.scss"]
})
export class AccountActionsComponent {
  @Input() selectedItem: Account;
  @Output() addUser = new EventEmitter();
  @Output() addAdmin = new EventEmitter();
  @Output() edit = new EventEmitter<Account>();
}

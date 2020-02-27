import { AccountsPageComponent } from "./accounts-page.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { AccountActionsComponent } from "../../components/account-actions/account-actions.component";
import { AccountListComponent } from "../../components/account-list/account-list.component";
import { AccountModule } from "../../account.module";

describe("AccountsPageComponent", () => {
  let spectator: Spectator<AccountsPageComponent>;
  const createComponent = createComponentFactory({
    component: AccountsPageComponent,
    declarations: [AccountActionsComponent, AccountListComponent],
    imports: [AccountModule]
  });

  beforeEach(() => (spectator = createComponent()));

  const getColUserNameValueEl = () => spectator.query(".col-user-name-value");
  const getColMailValueEl = () => spectator.query(".col-mail-value");
  const getColRoleCalueEl = () => spectator.query(".col-role-value");

  const getAddAccountUserBtnEl = () => spectator.query(".add-account-user");
  const getAddAccountAdminBtnEl = () => spectator.query(".add-account-admin");
  const getEditAccountBtnEl = () => spectator.query(".edit-account");

  describe("Account List", () => {
    it("should show account list table", () => {
      expect(getColUserNameValueEl()).toHaveText("MoshikG");
      expect(getColMailValueEl()).toHaveText("moshikg@gmail.com");
      expect(getColRoleCalueEl()).toHaveText("ADMIN");
    });
  });

  describe("Account Actions", () => {
    it("should show account actions", () => {
      expect(getAddAccountUserBtnEl()).toHaveText("Add Account");
      expect(getAddAccountAdminBtnEl()).toHaveText("Add Administrator Account");
      expect(getEditAccountBtnEl()).toHaveText("Edit");
      expect(spectator.queryAll("button").length).toBe(3);
    });

    it("should should disabled edit button when there is no row selection", () => {
      expect(getEditAccountBtnEl()).toHaveProperty("disabled", true);
    });

    it("should should enable edit button when there is row is selected", () => {
      // Arrange
      const editAccountEl = getEditAccountBtnEl();
      const rowTableEl = getColUserNameValueEl();

      // Act
      spectator.click(rowTableEl);

      // Assert
      expect(editAccountEl).toHaveProperty("disabled", false);
    });
  });
});

import { AccountActionsComponent } from "./account-actions.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { AccountModule } from "../../account.module";
import { accountsMock } from "../../data/mocks/accounts.mock";

describe("AccountActionsComponent", () => {
  let spectator: Spectator<AccountActionsComponent>;

  const createComponent = createComponentFactory({
    component: AccountActionsComponent,
    imports: [AccountModule]
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          selectedItem: accountsMock[0]
        }
      }))
  );

  it("should emit an add user account event when add account button is pressed", () => {
    const addAccountUserBtn = spectator.query(".add-account-user");
    const addUserSpy = spyOn(spectator.component.addUser, "emit");

    spectator.click(addAccountUserBtn);

    expect(addUserSpy).toHaveBeenCalled();
  });

  it("should emit an add admin account event when add account button is pressed", () => {
    const addAccountAdminBtn = spectator.query(".add-account-admin");
    const addAdminSpy = spyOn(spectator.component.addAdmin, "emit");

    spectator.click(addAccountAdminBtn);

    expect(addAdminSpy).toHaveBeenCalled();
  });

  it("should emit an edit account event when edit account button is pressed", () => {
    const editAccountAdminBtn = spectator.query(".edit-account");
    const editSpy = spyOn(spectator.component.edit, "emit");

    spectator.click(editAccountAdminBtn);

    expect(editSpy).toHaveBeenCalledWith(accountsMock[0]);
  });
});

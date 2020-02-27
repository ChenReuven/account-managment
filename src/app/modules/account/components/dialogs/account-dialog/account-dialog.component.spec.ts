import { AccountDialogComponent } from "./account-dialog.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { AccountModule } from "../../../account.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { accountsMock } from "../../../data/mocks/accounts.mock";
import { safeListMock } from "../../../data/mocks/safe-list.mock";
import { adminGroupsMock } from "../../../data/mocks/admin-groups.mock";

describe("AccountDialogComponent", () => {
  let spectator: Spectator<AccountDialogComponent>;

  const createComponent = createComponentFactory({
    component: AccountDialogComponent,
    providers: [
      {
        provide: MatDialogRef,
        useValue: {
          close: data => {
            return data;
          }
        }
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {
          selectedAccount: accountsMock[0]
        }
      }
    ],
    imports: [AccountModule]
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          safeList: safeListMock,
          adminGroups: adminGroupsMock,
          data: {
            selectedAccount: accountsMock[0]
          }
        }
      }))
  );

  const getStepperEl = () => spectator.query(".stepper");
  const getStepsEl = () => spectator.queryAll("mat-step-header");

  describe("account wizard", () => {
    it("should have wizard with 3 steps", () => {
      spectator.detectChanges();
      expect(getStepperEl()).toBeDefined();
      expect(getStepsEl().length).toBe(3);
    });

    it("should finish all the steps in stepper and emit a close function with object", () => {
      const expected = {
        safeId: "1",
        adminGroup: "1",
        details: {
          userName: "MoshikG",
          password: "sadsaASDAsds",
          mail: "moshikg@gmail.com"
        }
      };
      const matDialogRef = spectator.inject(MatDialogRef);
      const dialogClose = spyOn(matDialogRef, "close");
      spectator.click(spectator.query(".safe-list").children[1]);
      spectator.click(spectator.query(".safe-step-next-btn"));

      spectator.click(spectator.query(".account-details-next-btn"));
      spectator.click(spectator.query(".admin-groups-next-btn"));

      expect(dialogClose).toHaveBeenCalledWith(expected);
    });
  });
});

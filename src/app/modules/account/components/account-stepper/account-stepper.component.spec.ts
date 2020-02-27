import { AccountStepperComponent } from "./account-stepper.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { AccountModule } from "../../account.module";
import { safeListMock } from "../../data/mocks/safe-list.mock";
import { adminGroupsMock } from "../../data/mocks/admin-groups.mock";

describe("AccountStepperComponent", () => {
  let spectator: Spectator<AccountStepperComponent>;
  let componentUnderTest: AccountStepperComponent;

  const createComponent = createComponentFactory({
    component: AccountStepperComponent,
    imports: [AccountModule]
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          safeList: safeListMock,
          adminGroups: adminGroupsMock
        }
      }))
  );

  beforeEach(() => {
    componentUnderTest = spectator.component;
  });

  describe("Form Validations", () => {
    it("should create valid required form group with all validation", () => {
      const accountFormGroup = componentUnderTest.accountFormGroup;
      const safeFormControl = accountFormGroup.get("safeId");
      const adminGroupFormControl = accountFormGroup.get("adminGroup");
      const detailsFormGroup = accountFormGroup.get("details");
      const userNameFc = detailsFormGroup.get("userName");
      const passwordFc = detailsFormGroup.get("password");
      const mailFc = detailsFormGroup.get("mail");

      expect(safeFormControl.errors).toEqual({ required: true });
      expect(adminGroupFormControl.errors).toEqual({ required: true });
      expect(userNameFc.errors).toEqual({ required: true });
      expect(passwordFc.errors).toEqual({ required: true });
      expect(mailFc.errors).toEqual({ required: true });
    });

    it("should create valid form group with all validation", () => {
      const accountFormGroup = componentUnderTest.accountFormGroup;
      const detailsFormGroup = accountFormGroup.get("details");
      const userNameFc = detailsFormGroup.get("userName");
      const passwordFc = detailsFormGroup.get("password");
      const mailFc = detailsFormGroup.get("mail");
      userNameFc.setValue(
        "123456789101234567891012345678910123456789101234567891012345678910"
      );
      passwordFc.setValue("aaa");
      mailFc.setValue("aaa");

      expect(userNameFc.errors).toEqual({maxlength: { requiredLength: 60, actualLength: 66 }});
      expect(passwordFc.errors).toEqual({ pattern: { requiredPattern: "^(?=.*?[a-z])(?=.*?[A-Z]).*$", actualValue: "aaa" }});
      expect(mailFc.errors).toEqual({ email: true });
    });
  });
});

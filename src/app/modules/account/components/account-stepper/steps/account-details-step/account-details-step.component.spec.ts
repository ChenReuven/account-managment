import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountDetailsStepComponent } from "./account-details-step.component";

describe('AccountDetailsStepComponent', () => {
  let component: AccountDetailsStepComponent;
  let fixture: ComponentFixture<AccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

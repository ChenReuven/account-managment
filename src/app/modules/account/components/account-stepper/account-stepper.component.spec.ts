import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountStepperComponent } from "./account-stepper.component";

describe('AccountStepperComponent', () => {
  let component: AccountStepperComponent;
  let fixture: ComponentFixture<AccountStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

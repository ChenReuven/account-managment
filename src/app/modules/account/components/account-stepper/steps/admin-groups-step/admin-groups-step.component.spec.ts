import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminGroupsStepComponent } from "./admin-groups-step.component";

describe('AdminGroupsStepComponent', () => {
  let component: AdminGroupsStepComponent;
  let fixture: ComponentFixture<AdminGroupsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGroupsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

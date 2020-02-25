import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SafeStepComponent } from "./safe-step.component";

describe('SafeStepComponent', () => {
  let component: SafeStepComponent;
  let fixture: ComponentFixture<SafeStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

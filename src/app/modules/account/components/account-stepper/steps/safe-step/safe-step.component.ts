import { Component, Input, OnInit } from "@angular/core";
import { Safe } from "../../../../data/models/safe.model";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-safe-step",
  templateUrl: "./safe-step.component.html",
  styleUrls: ["./safe-step.component.scss"]
})
export class SafeStepComponent implements OnInit {
  @Input() safeList: Safe[];
  @Input() accountFormGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}

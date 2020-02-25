import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AdminGroup } from "../../../../data/models/admin-group.model";

@Component({
  selector: "app-admin-groups-step",
  templateUrl: "./admin-groups-step.component.html",
  styleUrls: ["./admin-groups-step.component.scss"]
})
export class AdminGroupsStepComponent {
  @Input() accountFormGroup: FormGroup;
  @Input() adminGroups: AdminGroup[];
}

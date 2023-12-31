import {Component, Input} from '@angular/core';
import {EducationItem, EmploymentItem} from "../professional-background.result";

@Component({
  selector: 'app-employment-table',
  templateUrl: './employment-table.component.html',
  styleUrls: ['./employment-table.component.css']
})
export class EmploymentTableComponent {

  @Input() employments: EmploymentItem[]
  @Input() background: string

  opened = false

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }
}

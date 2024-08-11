import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { PopoverComponent } from '../../shared/components/popover/popover.component';

export interface Employee {
  name: string,
  avatar: string,
  designation: string,
  experience: number,
  yoj: string,
  employee_rating: number,
  team: string,
  reporting_manager: string,
  mobile_number: string,
  email: string,
  location: string;
  employment_type: string;
  popoverVisibility: boolean;
}
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [NgFor, PopoverComponent],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
  @Input() employee: Employee = { name: '', designation: '',avatar: '', experience: 0,yoj:'', employee_rating: 0, team: '', reporting_manager: '', mobile_number: '', email: '' ,location: '',employment_type: '',popoverVisibility: false};
  
  togglePopover(state:boolean){
    this.employee.popoverVisibility = state;
  }
  getStar(n: number): number[] {
    return Array(n).fill(0).map((_, i) => i);
  }
}

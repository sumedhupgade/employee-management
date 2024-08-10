import { Component, Input } from '@angular/core';

interface Employee {
  name: string,
  avatar: string,
  role: string,
  experience: number,
  doj: string,
  employee_rating: number,
  current_team: string,
  reporting_manager: string,
  mobile_number: string,
  email: string,
}
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
  @Input() employee: Employee = { name: '', role: '',avatar: '', experience: 0,doj:'', employee_rating: 0, current_team: '', reporting_manager: '', mobile_number: '', email: '' };
}

import { Component, Input } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../shared/services/common.service';
import { Employee } from '../employee-card/employee-card.component';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [EmployeeCardComponent, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  showBangloreOnly = false;
  employees:Employee[] = [];

  constructor(private cs: CommonService){
    this.cs.employeesChanged.subscribe((value)=>{
      this.employees = value;
    })
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.cs.getEmployeesData().subscribe({
      next: (response) => {
        this.employees = response.employees;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('API call completed.');
      }
    });
  }

  orgEmployees = [...this.employees];
  filterEmployee() {
    this.cs.filterData({location: this.showBangloreOnly ? 'Bangalore' : ''})
  }
}

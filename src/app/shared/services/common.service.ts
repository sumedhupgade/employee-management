import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../../components/employee-card/employee-card.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  that = this;
  appData = { employees: [] };
  employeesChanged:Subject<Array<Employee>> = new Subject<Array<Employee>>()
  
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<any>('db/db.json').subscribe({
      next: (data) => (this.appData = data),
      error: (error) => console.error(error),
      complete: () => console.log('Completed'),
    });
  }

  getEmployeesData(): Observable<any> {
    return this.http.get<any>('db/db.json');
  }

  filterData(criteria: object) {
    let filterCriteria = {...criteria}
    // Check and delete key having no value and delete
    Object.keys(filterCriteria).forEach((key)=>{
      if (filterCriteria[key as keyof object] == '') {
        delete filterCriteria[key as keyof object]
      }
    })

    /**
     * Create new copy of main data everytime
     * Filter for each key and the emit the data to main component
     */ 
    const emp = [...this.appData.employees];
    let filteredEmployee =emp.filter((employee) =>
      Object.keys(filterCriteria).every(function (key) {
          return employee[key as keyof object] === filterCriteria[key as keyof object]
      })
    );
    
    this.employeesChanged.next(filteredEmployee)
  }
}

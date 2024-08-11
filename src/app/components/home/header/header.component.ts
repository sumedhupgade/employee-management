import { Component } from '@angular/core';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedTeam = 'Choose Team';
  team_list = [
    { value: 'Product Team', label: 'Product Team' },
    { value: 'IDC', label: 'IDC' },
    { value: 'OCBC', label: 'OCBC' },
    { value: 'Radian', label: 'Radian' },
    { value: 'Rustify', label: 'Rustify' },
  ];

  constructor(private cs: CommonService){}
  filterEmployee(value:string) {
    const criteria = { team: value };
    this.cs.filterData(criteria)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectComponent } from '../../shared/components/select/select.component';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
})
export class SearchPanelComponent {

  @Input() searchPanelVisible = false;
  @Output() searchPanelVisibleChange = new EventEmitter()
  searchObj = {
    dept: 'Front End Development',
    roll: 'Full Time',
    designation: '',
    experience: '',
    yoj: '',
    location: '',
    team: ''
  }

  dept_list = [
    {
      label: 'Front End Development',
      value: 'Front End Development',
    },
    {
      label: 'ML Engineering',
      value: 'ML Engineering',
    },
    {
      label: 'Quality Ananlyst',
      value: 'Quality Ananlyst',
    },
    {
      label: 'Human Resource Management',
      value: 'Human Resource Management',
    },
    {
      label: 'Research & Development',
      value: 'Research & Development',
    },
    {
      label: 'Back End Development',
      value: 'Back End Development',
    },
  ];

  role_list = [
    {
      label: 'Full Time',
      value: 'Full Time',
    },
    {
      label: 'Consultant',
      value: 'Consultant',
    },
    {
      label: 'Part Time',
      value: 'Part Time',
    },
    {
      label: 'Intern',
      value: 'Intern',
    },
  ];
  designation_list = [
    {
      label: 'Sr. UI Developer',
      value: 'Sr. UI Developer',
    },
    {
      label: 'Full Stack Developer',
      value: 'Full Stack Developer',
    },
    {
      label: 'UI/UX Designer',
      value: 'UI/UX Designer',
    },
    {
      label: 'DevOps Engineer',
      value: 'DevOps Engineer',
    },
    {
      label: 'Data Scientist',
      value: 'Data Scientist',
    },
    {
      label: 'QA Engineer',
      value: 'QA Engineer',
    },
  ];
  exp_list = [
    {
      label: '5 Years Above',
      value: '5 Years Above',
    },
    {
      label: '4 Years Above',
      value: '4 Years Above',
    },
    {
      label: '3 Years Abover',
      value: '3 Years Abover',
    },
    {
      label: '2 Years Above',
      value: '2 Years Above',
    },
    {
      label: '1 Years Above',
      value: '1 Years Above',
    },
    {
      label: 'Intern',
      value: 'Intern',
    },
  ];
  yoj_list = [
    {
      label: '2017',
      value: '2017',
    },
    {
      label: '2018',
      value: '2018',
    },
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2020',
      value: '2020',
    },
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2022',
      value: '2022',
    },
    {
      label: '2023',
      value: '2023',
    },
    {
      label: '2024',
      value: '2024',
    },
  ];

  clear(){
    this.searchObj = {
      dept: '',
      roll: '',
      designation: '',
      experience: '',
      yoj: '',
      location: '',
      team: ''
    }
  }

  closeSearchPanel(){
    this.searchPanelVisible = false;
    this.searchPanelVisibleChange.emit()
  }
}

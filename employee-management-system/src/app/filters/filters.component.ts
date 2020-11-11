import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../constant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: any;
  teams: Array<string>;
  departments: Array<string>;
  roles: Array<string>;
  designations: Array<string>;
  years: Array<string>;
  locations: Array<string>;
  constructor(
    private constant: ConstantService,
    private router: Router
  ) {
    this.teams = constant.get_teams();
    this.departments = constant.get_departments();
    this.roles = constant.get_roles();
    this.designations = constant.get_designations();
    this.years = constant.get_years();
    this.locations = constant.get_locations();
    this.filters = constant.get_filters();
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/home']);
  }

  clear() {
    this.filters = {
      team: '',
      department: '',
      role: '',
      designation: '',
      year_of_joining: '',
      location: ''
    };
    this.constant.set_filter(this.filters);
    this.back();
  }

  appply_filter() {
    this.constant.set_filter(this.filters);
    this.back();
  }

}

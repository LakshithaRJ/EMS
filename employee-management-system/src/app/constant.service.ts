import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  employees: any;
  filters: any;
  teams: Array<string>;
  departments: Array<string>;
  roles: Array<string>;
  designations: Array<string>;
  years: Array<string>;
  locations: Array<string>;
  filter_subject = new Subject<any>();

  constructor() {
    this.employees = [
      {
        name: 'Andrew Bridgen',
        mobile: '(479) 782-0155',
        email: 'user1@infrrd.ai',
        position: 'CEO',
        role: 'Full Team',
        experience: 10,
        year_of_joining: 2018,
        location: 'Bangalore',
        team: 'Product Team',
        department: 'Research & Development',
        rating: 4,
        reporting_manager: ''
      },
      {
        name: 'Della Petty',
        mobile: '(838) 301-4665',
        email: 'user2@infrrd.ai',
        position: 'CTO',
        role: 'Full Time',
        experience: 15,
        year_of_joining: 2018,
        location: 'Bangalore',
        team: 'Tech Team',
        department: 'Research & Development',
        rating: 5,
        reporting_manager: ''
      },
      {
        name: 'Cadence Simmons',
        mobile: '(274) 343-2686',
        email: 'user3@infrrd.ai',
        position: 'Tech Lead',
        role: 'Full Time',
        experience: 5,
        year_of_joining: 2019,
        location: 'Bangalore',
        team: 'Tech Team',
        department: 'Research & Development',
        rating: 4,
        reporting_manager: 'Della Petty'
      },
      {
        name: 'Alexia Dorsey',
        mobile: '(364) 389-3527',
        email: 'user4@infrrd.ai',
        position: 'Web Developer',
        role: 'Part Time',
        experience: 1,
        year_of_joining: 2020,
        location: 'Chennai',
        team: 'Tech Team',
        department: 'Research & Development',
        rating: 3,
        reporting_manager: 'Cadence Simmons'
      },
      {
        name: 'Sheila Duggan',
        mobile: '(518) 378-7716',
        email: 'user5@infrrd.ai',
        position: 'Web Developer',
        role: 'Part Time',
        experience: 0,
        year_of_joining: 2020,
        location: 'Chennai',
        team: 'Tech Team',
        department: 'Research & Development',
        rating: 5,
        reporting_manager: 'Cadence Simmons'
      },
      {
        name: 'Bianka Mcmanus',
        mobile: '(391) 730-4952',
        email: 'user6@infrrd.ai',
        position: 'Sales Executive',
        role: 'Part Time',
        experience: 2,
        year_of_joining: 2019,
        location: 'Hyderabad',
        team: 'Sales Team',
        department: 'Sales & Marketing',
        rating: 3,
        reporting_manager: 'Andrew Bridge'
      },
      {
        name: 'Alina Hardin',
        mobile: '(612) 239-6700',
        email: 'user7@infrrd.ai',
        position: 'Sales Executive',
        role: 'Part Time',
        experience: 2,
        year_of_joining: 2019,
        location: 'Hyderabad',
        team: 'Sales Team',
        department: 'Sales & Marketing',
        rating: 4,
        reporting_manager: 'Andrew Bridge'
      }
    ];
    this.filters = {
      team: '',
      department: '',
      role: '',
      designation: '',
      year_of_joining: '',
      location: ''
    };
    this.teams = ['Product Team', 'Tech Team', 'Sales Team'];
    this.departments = ['Research & Development', 'Sales & Marketing'];
    this.roles = ['Full Time', 'Part Time'];
    this.designations = ['CEO', 'CTO', 'Tech Lead', 'Web Developer', 'Sales Executive'];
    this.years = ['2017', '2018', '2019', '2020'];
    this.locations = ['Bangalore', 'Chennai', 'Hyderabad'];
  }

  set_filter(data: any) {
    this.filters = data;
    this.filter_subject.next(this.filters);
  }

  get_filter(): Observable<any> {
    return this.filter_subject.asObservable();
  }

  get_filters() {
    return this.filters;
  }

  get_employees(data: any) {
    const employees = [];
    this.employees.forEach((a: any) => {
      let flag = true;
      if (data.team != '' && data.team != a.team) { flag = false; }
      if (data.department != '' && data.department != a.department) { flag = false; }
      if (data.role != '' && data.role != a.role) { flag = false; }
      if (data.designation != '' && data.designation != a.designation) { flag = false; }
      if (data.year_of_joining != '' && data.year_of_joining != a.year_of_joining) { flag = false; }
      if (data.location != '' && data.location != a.location) { flag = false; }
      if (flag) { employees.push(a); }
    });
    return employees;
  }

  get_teams() {
    return this.teams;
  }

  get_departments() {
    return this.departments;
  }

  get_roles() {
    return this.roles;
  }

  get_designations() {
    return this.designations;
  }

  get_years() {
    return this.years;
  }

  get_locations() {
    return this.locations;
  }
}

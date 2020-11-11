import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../constant.service';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  filters: any;
  teams: Array<string>;
  constructor(
    private constant: ConstantService,
    private router: Router
  ) {
    this.filters = constant.get_filters();
    this.teams = constant.get_teams();
    this.get_employees();
  }

  ngOnInit(): void {
    this.constant.get_filter().subscribe(data => {
      this.filters = data;
      this.get_employees();
    });
    this.router.events.subscribe((route: any) => {
      if(Object.keys(route).length == 3 && route.url == '/home' && route.urlAfterRedirects == '/home') this.get_employees();
    });
  }

  get_employees() {
    this.employees = this.constant.get_employees(this.filters);
    this.employees.forEach(a=>{
      a['show'] = false;
    })
  }

  apply_team_filter() {
    this.get_employees();
  }

  on_rate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  send_message(num: number) {
    this.employees.forEach((a,i)=>{
      if(num == i) this.employees[num].show = !this.employees[num].show;
      else a['show'] = false;
    })
  }

}

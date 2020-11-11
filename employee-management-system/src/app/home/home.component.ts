import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active_tab: string;
  constructor(
    private router: Router
  ) {
    this.active_tab = "Overview";
    let route = this.router.url.split('/');
    this.setTitle(route[2]);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = this.router.url.split('/');
        this.setTitle(route[2]);
      }
    });
  }

  setTitle(route) {
    switch (route) {
      case '':
        this.active_tab = "Overview";
        break;
      case 'filters':
        this.active_tab = "Search";
        break;
    }
  }

  overview() {
    this.active_tab = "Overview";
    this.router.navigate(['/home']);
  }

  search() {
    this.active_tab = "Search";
    this.router.navigate(['/home/filters']);
  }

}

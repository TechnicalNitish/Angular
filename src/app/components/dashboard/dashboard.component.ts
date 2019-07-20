import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }


  onLogOut()
  {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login");
  }

 
}

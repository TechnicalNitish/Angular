import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';

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

  trashShow()
  {
     this.route.navigateByUrl("home/trash");
  }

archiveShow()
{
  this.route.navigateByUrl("home/archive");
}
getNote()
{
  this.route.navigateByUrl("home/get-note");
}
}

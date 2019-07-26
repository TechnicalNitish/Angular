import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { MatDialog } from '@angular/material';
import { EditlabelComponent } from '../editlabel/editlabel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor(private route:Router,private dialog:MatDialog) { }

  
  
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


      openDialog(label:any)
      {
        const dialogRef =this.dialog.open(EditlabelComponent,{
         // height:"200px",
          width:"300px",
          // data:{
          //   labelName:label.labelName
          // }
          });
          
      }
}

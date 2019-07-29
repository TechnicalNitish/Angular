import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { NoteService } from 'src/app/service/note.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteList:any;
  constructor(private route:Router,private dialog:MatDialog,
    private noteservice:NoteService) { }
    private obtainNotes = new BehaviorSubject([]);
    currentMessage = this.obtainNotes.asObservable();

    // note: NoteModel = new NoteModel();
    // token:string;
    // data:any;
    
  ngOnInit() {
  
  }
  // searchForm = this.formBuilder.group({
  //   'text': new FormControl(this.note.title),
  //   'description' : new FormControl(this.note.description)
  // })


  onsearch(text:any) {
      this.noteservice.getRequest("noteservice/search?text="+text).subscribe
      (
        (response:any):any=>
        {
          this.obtainNotes.next(response)
          this.route.navigate(['home/search']);
        }
      )
      

        
            
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

      gridGetNote()
      {
         this.route.navigateByUrl("home/grid");
      }
}

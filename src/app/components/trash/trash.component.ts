import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList:any;
  @Input() noteInfo:any;
  constructor(private noteservice:NoteService,private route:Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getTrash();
  }

  getTrash()
  {
    this.noteservice.getRequest("noteservice/getalltrash").subscribe(
      data=>{
          this.noteList=data;
          console.log("all Note =>",data);
      })

  }

   restoreNote()
  {
    this.noteservice.getRequest("noteservice/trash"+this.noteInfo.noteId).subscribe(
        data=>{
            
                 this.route.navigateByUrl("home");
                 this.snackbar.open("Restored","Done");
      }
    )
   }

  deletePermanent()
  {
    this.noteservice.deleteRequest("noteservice/delete?noteid"+this.noteInfo.noteId).subscribe(
        data =>{
          this.snackbar.open("Deleted");
           this.route.navigateByUrl("home");
        }
    )
    
  }
}

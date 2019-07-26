import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-delete-and-restore',
  templateUrl: './delete-and-restore.component.html',
  styleUrls: ['./delete-and-restore.component.scss']
})
export class DeleteAndRestoreComponent implements OnInit {

  constructor(private noteservice:NoteService,private route :Router,private snackbar:MatSnackBar) { }
  @Input()
  trashInfo:any;
  ngOnInit() {
  }

  restoreNote()
  {
    this.noteservice.getRequest("noteservice/trash?noteid="+this.trashInfo.noteId).subscribe(
        data=>{
                 this.route.navigateByUrl("home");
                 this.snackbar.open("Restored","Done");
      });
   }

  deletePermanent()
  {
    this.noteservice.deleteRequest("noteservice/delete?noteid="+this.trashInfo.noteId).subscribe(
        data =>{
          
            this.snackbar.open("Deleted Permanent");
            this.route.navigateByUrl("home/trash");
        });
      }
}

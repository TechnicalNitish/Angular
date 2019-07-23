import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteservice:NoteService,private snackBar:MatSnackBar,private route:Router) { }

  ngOnInit() {
  }

  @Input() noteInfo:any;


  onArchive()
  {
      this.noteservice.getRequest("noteservice/archive?noteid="+this.noteInfo.noteId).subscribe
      (
        data =>{
            this.snackBar.open("Archived","Done");
              this.route.navigateByUrl("home");
        }
      )
  }

  
  onTrash()
  {
   
    this.noteservice.getRequest("noteservice/trash?noteid="+this.noteInfo.noteId).subscribe(
      response=>{
      
        if(response==200)
        {
          this.snackBar.open("Is Trashed");
        
        }
      }
    )
  }
}

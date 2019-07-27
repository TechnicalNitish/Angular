import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar, fadeInItems } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any;
  @Input() 
  noteInfo:any;
  constructor(private noteservice:NoteService,private snackBar:MatSnackBar,private route:Router) { }
  
  ngOnInit() {
    this.getArchive();
  }

  getArchive()
  {
    this.noteservice.getRequest("noteservice/getArchiveNote").subscribe(
      data=>{
        this.noteList= data;
        console.log('get all note ==>',data);
      }
    )
  }

  
  // onArchive()
  // {
  //     this.noteservice.getRequest("noteservice/archive?noteid="+this.noteInfo.noteId).subscribe
  //     (
  //       data =>{
          
  //           this.snackBar.open("UnArchived","Done");
  //             this.route.navigateByUrl("home");
  //       }
  //     )
  // }

}

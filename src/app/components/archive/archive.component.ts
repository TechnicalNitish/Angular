import { Component, OnInit } from '@angular/core';
import { MatSnackBar, fadeInItems } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any;
  
  constructor(private noteservice:NoteService,private snackbar:MatSnackBar) { }

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
}

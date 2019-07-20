import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {

  constructor(private noteservice: NoteService, private snapBar: MatSnackBar) { }

  noteList: any;
  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getRequest("noteservice/getall").subscribe(
      data => {
        this.noteList= data;
        console.log('get all note ==>', data);

      }
    )
  }
}

import { Component, OnInit} from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, MatDialog} from '@angular/material';
import { UpdatenotecomponentComponent } from '../updatenotecomponent/updatenotecomponent.component';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {

  
  constructor(private noteservice: NoteService, private snackbar: MatSnackBar,private dialog:MatDialog) { }

  noteList: any;

  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getRequest("noteservice/getall").subscribe(
      data => {
        this.noteList = data;
        console.log('get all note ==>', data);

      }
    )
  }

  // openNote(note:any)
  // {
  //   const ref=this.dialog.open(UpdatenotecomponentComponent,{
  //     height:"260px",
  //     width:"500px",

  //   //   data:{
  //   //     noteId:note.noteId,
  //   //     title:note.title,
  //   //     description:note.description
  //   //   }
  //   // }
  //   // )
  openNote(note:any){
    const ref=this.dialog.open(UpdatenotecomponentComponent,{
      height:"260px",
      width:"500px",

      data:
      {
        noteId:note.noteId,
        title:note.title,
        description:note.description
      }
    })
  }


}

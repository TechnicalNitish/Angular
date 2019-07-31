import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatDialog } from '@angular/material';
import { UpdatenotecomponentComponent } from '../updatenotecomponent/updatenotecomponent.component';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {

 
  noteList:any;
  constructor(private noteservice:NoteService,private dialog:MatDialog) { }

  ngOnInit() {
    this.showGrid();
  }

  showGrid()
  {
    this.noteservice.getRequest("noteservice/getall").subscribe(
      data=> {
          this.noteList=data;
          console.log("Note List ==>",data);
          
      })
    
  }

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

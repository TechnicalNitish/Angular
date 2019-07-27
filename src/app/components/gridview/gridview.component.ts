import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {

  noteList:any;
  constructor(private noteservice:NoteService) { }

  ngOnInit() {
    this.showGrid();
  }

  showGrid()
  {
    this.noteservice.getRequest("noteservice/getall").subscribe(
      (response:any)=> {
          this.noteList=response;
          console.log("Note List ==>",response);
          
      })
    
  }

}

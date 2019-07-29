import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  noteList:any;
  constructor(private noteService:NoteService,private dashboard:DashboardComponent) { }
  @Input() text;
  ngOnInit() {
    this.onSearch();
  }


  onSearch()
  {
  // {
  //     this.noteService.getRequest("noteservice/search?text="+this.text).subscribe(
  //       (response:any)=>{
  //                 this.noteList=response;
  //       }
  //     )
  this.dashboard.currentMessage.subscribe(
    (data:any):any=>
    {
      this.noteList=data;
      console.log("search",data);
      
    }
  )
  }
}

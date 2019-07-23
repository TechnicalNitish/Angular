import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {

  constructor(private noteservice: NoteService,private snackbar:MatSnackBar) { }

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

  //  @Input() noteInfo:any;
  //  onArchive()
  //  {
  //     this.noteservice.putRequest("noteservice/archive",this.noteInfo.noteid).subscribe(
  //        data =>{
  //      if(data==200)
  //         {
  //              this.snackbar.open("Archive","Done");
                
  //            }
  //            else{
  //                this.snackbar.open("Not Archived");
  //           }
  //        }
  //      )
  //  }

 
}

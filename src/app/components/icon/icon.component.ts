import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Router } from '@angular/router';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  labelList:any;
  constructor(private noteservice:NoteService,private snackBar:MatSnackBar,private route:Router,private labelservice:LabelService) { }

  ngOnInit() {

    this. getLabel();
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
      (response:any)=>{
          this.snackBar.open("Is Trashed");
          this.route.navigateByUrl("home");
      }
    )
  }


  addLabeltoNote(label:any)
  {
    this.noteservice.getRequest("noteservice/addlable?labelid="+label.labelid+"&noteid="+this.noteInfo.noteId).subscribe(
      (respose:any):any=>
      {
        if(respose.statuscode==200)
        {
          this.snackBar.open("label added to note ","close",{duration:2500});
        }
        else
        {
          this.snackBar.open("please check fields...","close",{duration:2500});
        }
      });

  }

  getLabel() {
    this.labelservice.getRequest("labelservice/getLabel").subscribe(
      (response: any) => {

        this.labelList = response;
      });
  }
}

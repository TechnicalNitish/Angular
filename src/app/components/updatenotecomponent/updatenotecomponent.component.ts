import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core/testing';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/Model/note-model';

@Component({
  selector: 'app-updatenotecomponent',
  templateUrl: './updatenotecomponent.component.html',
  styleUrls: ['./updatenotecomponent.component.scss']
})
export class UpdatenotecomponentComponent implements OnInit {

  data: any;
  open: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public notedata: any, private noteservice: NoteService, private snackbar: MatSnackBar,
    private route: Router, private dialog: MatDialog) { }

  updateForm: FormGroup;

  note: NoteModel = new NoteModel();
  
  ngOnInit() {
    this.updateForm = new FormBuilder().group({

      "title": new FormControl(this.notedata.title),
      "description": new FormControl(this.notedata.description),
      "noteid": new FormControl(this.notedata.noteId)
    });
  }

  onClose() {
    this.noteservice.putRequest("noteservice/updatenote?noteid=" + this.notedata.noteId, this.updateForm.value).subscribe(
      (data:any) => {
        if (data.statuscode === 200) {
          this.snackbar.open(data.messageStatus, "OK", { duration: 1000 });
          console.log("Inside Update Note Method...");
        }
        else {

        }
      });
    // this.dialog.closeAll();
  }

}

import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { NoteModel } from 'src/app/Model/note-model';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

   open:boolean=false;
  constructor(private noteservice:NoteService,private formBuilder:FormBuilder,private snackbar:MatSnackBar) { }

  note:NoteModel=new NoteModel();
  noteForm=this.formBuilder.group(
    {
      title:this.note.title,
      description:this.note.description

    });
    title=new FormControl('');
    description=new FormControl('');

  ngOnInit() {
    
  }

  OnOpen()
  {
    this.open=true;
  }
  OnClose()
  {
    this.open=false;
  }
  
  OnCreateNote()
  {
    this.noteservice.postRequest("noteservice/note",this.noteForm.value).subscribe(
      data => {
        if(data.statuscode==200)
        {
            this.snackbar.open("note created and saved","Done",{duration:2500});
        }
        else{
          this.snackbar.open("Note Not Created Please Login First","Done",{duration:2500});
        }
      }
    )
  }
}

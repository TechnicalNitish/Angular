import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Label } from 'src/app/Model/label';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  labelList: any;
  lableInfo: any;
  constructor(@Inject(MAT_DIALOG_DATA) public label: any, private dialog: MatDialog, private labelservice: LabelService,
    private snackbar: MatSnackBar,private formBuilder:FormBuilder) { }

  
  labelModel: Label = new Label();

  ngOnInit() {

    this.getLabel();
    
  }
  labelForm = this.formBuilder.group(
    {
      "labelName": new FormControl(this.labelModel.labelName)

    }
  );

  createLabel() {
    this.labelservice.postRequest("labelservice/create", this.labelForm.value).subscribe(
      (response: any) => {
        if (response.statuscode == 200) {
          this.snackbar.open("Label Created", "Done");
        }
        else {
          this.snackbar.open("Label not Created", "ok");
        }
      });

  }



  getLabel() {
    this.labelservice.getRequest("labelservice/getLabel").subscribe(
      (response: any) => {

        this.labelList = response;
        console.log("labelList=>", this.labelList);
      });
  }



  deleteLabel(labels) {
    this.labelservice.deleteRequest("labelservice/delete?labelid=" + labels.labelid).subscribe(
      (response: any) => {
        if (response.statuscode == 200) {
          this.snackbar.open("Label Deleted", "Ok", { duration: 2500 });
        }
        else {
          this.snackbar.open("Not available", "Ok", { duration: 2500 });
        }
      }
    )
  }



  updateLabel(labels) {
    this.labelservice.putRequest("labelservice/update?labelid=" +labels.labelid ,this.labelForm.value).subscribe
      (
        (response: any) => {
          if (response.statuscode == 200) {
            this.snackbar.open("Updated", "Done");
          }
        }
      )
  }



}

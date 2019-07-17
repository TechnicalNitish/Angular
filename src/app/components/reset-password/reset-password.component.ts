import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserserviceService } from 'src/app/service/userservice.service';
import { ResetModel } from 'src/app/Model/reset-model';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private userservice:UserserviceService,private formBuilder:FormBuilder) { }
  reset:ResetModel=new ResetModel();
  resetForm=this.formBuilder.group(
    {
      newpassword:this.reset.password,
      confirmpassword:this.reset.password
    });
    newpassword=new FormControl('');
    confirmpassword=new FormControl('');

  ngOnInit() {
  }

  onReset()
  {
    if(this.newpassword.value==this.confirmpassword.value)
    {
      this.userservice.postRequest("userservice/reset?password=",this.reset.password).subscribe(
        data=>{
          if(data.statusCode==200)
          {
              this.snackbar.open(data.messageStatus,'ok',{duration:1000});
              
          }
          else{
            this.snackbar.open(data.messageStatus,'retry',{duration:1000});
          }
        }
      )
    }
  }
}

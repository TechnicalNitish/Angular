import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserserviceService } from 'src/app/service/userservice.service';
import { ResetModel } from 'src/app/Model/reset-model';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token:string;
  constructor(private snackbar:MatSnackBar,private userservice:UserserviceService,private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }
  reset:ResetModel=new ResetModel();
  resetForm=this.formBuilder.group(
    {
      newpassword:this.reset.newpassword,
      confirmpassword:this.reset.confirmpassword
    });
    newpassword=new FormControl('');
    confirmpassword=new FormControl('');

  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    localStorage.setItem("token",this.token);
    
  }


  onReset()
  {
    
    if(this.newpassword.value==this.confirmpassword.value)
    {
      this.userservice.putRequest("userservice/reset?password=",this.reset.newpassword).subscribe(
        data=>{
          if(data.statusCode==200)
          {
              this.snackbar.open("password Changed",'ok',{duration:1000});
              
          }
          else{
            this.snackbar.open("password ",'retry',{duration:1000});
          }
        }
      )
    }
  }
}

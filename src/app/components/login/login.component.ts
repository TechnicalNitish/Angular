import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserserviceService} from 'src/app/service/userservice.service';
import { LoginModel } from 'src/app/Model/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private formBuilder:FormBuilder,
    private router:Router,private userservice:UserserviceService) { }
    user:LoginModel =new LoginModel();
    loginForm=this.formBuilder.group(
      {
        email:[this.user.email],
        password:[this.user.password]

      });
    email=new FormControl('');
    password=new FormControl('');

  ngOnInit() {
  }
  onLogin()
  {
    this.userservice.postRequest("userservice/login",this.loginForm.value).subscribe(

      data=>{
          if(data.statuscode==200)
          {
            this.snackBar.open(data.messageStatus,'ok',{duration:1000});
              
          }
          else{
            this.snackBar.open(data.messageStatus,'Not Registered',{duration:1000});
            this.router.navigateByUrl("/register");
          }
      }
    )
  }

}

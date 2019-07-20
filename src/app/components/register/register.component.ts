import { Component,OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Register } from 'src/app/Model/register';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // registerForm:FormGroup;
  data:any;
  constructor(private snackBar:MatSnackBar,private formBuilder:FormBuilder,
    private router:Router,private userservice:UserserviceService) 
    { }
    user:Register=new Register();
    registerForm= this.formBuilder.group({
      firstname:[this.user.first_name],
      lastname:[this.user.last_name],
      email:[this.user.email],
      contact:[this.user.contact],
      address:[this.user.address],
      password:[this.user.password]

    });
    firstname=new FormControl('');
    lastname=new FormControl('');
    contact=new FormControl('');
    email=new FormControl('');
    password= new FormControl('');
    address=new FormControl('');
  ngOnInit() {



  }
  onRegister()
  {
        this.userservice.postRequest("userservice/register",this.registerForm.value).subscribe(
          data=>{

            if(data.statuscode==200)
            {
              this.snackBar.open("Successfully Register", "undo",{duration:2500});
               this.router.navigateByUrl("/login");
            }
            else{
              this.snackBar.open("Registration fails", "retry", {duration:2500});
             this.router.navigateByUrl("/register");
            }
          }
        )
  }
}

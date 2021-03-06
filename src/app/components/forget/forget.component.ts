import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { ForgetModel} from 'src/app/Model/forget-model';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  data:any;
  constructor(private snackbar:MatSnackBar,
    private userservice:UserserviceService,private router:Router) { }
  
    forget:ForgetModel=new ForgetModel();
   
    email=new FormControl(this.data);

  ngOnInit() {
  }

  onForget()
  {
    this.userservice.getRequest("userservice/forget?email="+this.forget.email).subscribe(
      data=>{
        if(data.statusCode== 200)
        {
          this.snackbar.open(data.messageStatus,'ok',{duration:1000});
          this.router.navigateByUrl("/setpassword");
        }
        else{
          this.snackbar.open(data.messageStatus,'Retry',{duration:1000});
        }
      }
    )
      
  }
}

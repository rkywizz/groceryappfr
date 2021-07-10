import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  otp:number=0;
  errormsg:string="";
  login:string=""
  message:string="";
  constructor(private router:Router,private service:UsersServiceService) {}
  

  ngOnInit(): void {
  }
  onSubmit(){
   this.service.forgetPassword(this.login,this.otp).subscribe(
    (success)=>{
      alert(success);
      localStorage.setItem("forgetlogin",this.login);
      this.router.navigate(['resetpassword']);
    }​​​​​​​​, error=> {​​​​​​​​ 
      console.log(error.error);
      this.errormsg = error.error;
      alert(this.errormsg)
            }​​​​​​​​);
    
   console.log(this.message)
    // if(this.message=="Verified")
    // {
    //   localStorage.setItem("forgetid","this.login");
    //   this.router.navigate(['resetpassword'])

    // }​​​​​​​​
    // else{
    //   this.error="Invalid"
    //   console.log(this.error)
   // }
  }
}
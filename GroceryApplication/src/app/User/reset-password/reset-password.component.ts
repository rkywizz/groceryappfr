import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newpass:string="";
  errormsg:string="";
  login:any=localStorage.getItem("forgetlogin");
  message:String="";
  constructor(private router:Router,private service:UsersServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
    {
  this.service.resetPassword(this.login,this.newpass).subscribe((success)=>{
    alert(success);
    localStorage.removeItem("forgetlogin")
    this.router.navigate(['home']);
    },error=> {​​​​​​​​ 
        console.log(error.error);
        this.errormsg = error.error;
        alert(this.errormsg)
              }​​​​​​​​);
  //   alert(success);
  //   localStorage.setItem("forgetlogin",this.login);
  //   this.router.navigate(['resetpassword']);
  // }​​​​​​​​, error=> {​​​​​​​​ 
  //   console.log(error.error);
  //   this.errormsg = error.error;
  //   alert(this.errormsg)
  //         }​​​​​​​​);
}
}
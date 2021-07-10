import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldpass:string="";
  newpass:string="";
  error:string="";
  login:any=localStorage.getItem("Login");
  message:String="";
  constructor(private router:Router,private service:UsersServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
    {
      if((localStorage.getItem("Login"))==null)
    {
      this.login=localStorage.getItem("Admin")
    }​​​​​​​​;
  this.service.changePassword(this.login,this.oldpass,this.newpass).subscribe((data:any)=>{
    this.message=data;
    alert(JSON.stringify(data))});
    this.router.navigate(['home']);
    }
}
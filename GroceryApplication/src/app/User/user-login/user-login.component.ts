import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userObj:User;
  error:string='';
  constructor(private router:Router,private service:UsersServiceService) {
    this.userObj=new User();
   }

  ngOnInit(): void {
  }

    

  onSubmit()
    {​​​​​​​​
  this.service.loginCheck(this.userObj).subscribe(success=> {​​​​​​​​
  alert("login Successfull");
  localStorage.setItem("Login",this.userObj.loginId);
  this.router.navigate(['productlist']);
    }​​​​​​​​, error=> {​​​​​​​​ 
  console.log(error.error);
  this.error = error.error;
        
    }​​​​​​​​);
    }​​​​​​​​
  
  
}
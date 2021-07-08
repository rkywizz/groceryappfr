import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  userObj:User;
  errormsg:string='';
  constructor(private router:Router,private service:UsersServiceService) {
    this.userObj=new User();
   }

  ngOnInit(): void {
  }

    

  onSubmit()
    {​​​​​​​​
  this.service.loginCheckadmin(this.userObj).subscribe(success=> {​​​​​​​​
  alert("login Successfull");
  localStorage.setItem("Admin",this.userObj.loginId);
  this.router.navigate(['adminDashboard']);
 
    }​​​​​​​​, error=> {​​​​​​​​ 
  console.log(error.error);
  this.errormsg = error.error;
        
    }​​​​​​​​);
    }​​​​​​​​
  
  
}
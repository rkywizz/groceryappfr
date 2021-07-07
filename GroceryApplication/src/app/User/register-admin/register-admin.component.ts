import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  userObj:User;
  constructor(private router:Router,private service:UsersServiceService) {
    this.userObj=new User();
   }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.registerUser(this.userObj).subscribe(
    (data:any)=>{
      alert("User Added Successfully!!!!!");
      this.router.navigate(['userlist']);
    }
  );  
  alert(JSON.stringify(this.userObj));
}
}

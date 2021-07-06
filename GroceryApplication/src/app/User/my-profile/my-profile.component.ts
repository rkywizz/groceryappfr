import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userId:any;
  userObj:User=new User();
  constructor(private route1:ActivatedRoute,
    private service:UsersServiceService) { 
    route1.params.subscribe(params =>{
      this.userObj.id=params['loginId']
      }
      );
  }
  
  ngOnInit(): void {
  this.onLoaad();
  }
  onLoaad(){
    this.userId=localStorage.getItem("Login");
  this.service.getUserByLoginId(this.userId).subscribe(
  (data:any)=>{this.userObj=data;
  alert(JSON.stringify(data))
  }
  );
  }
  }
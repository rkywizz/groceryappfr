import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  myid:number = 0;
  userObj:User=new User();
     
   constructor(private router:Router,private route1:ActivatedRoute,
     private service:UsersServiceService) { 
     route1.params.subscribe(params =>{
       this.userObj.id=params['id']
       }
       );
   }
 
   ngOnInit(): void {
   this.onLoaad();
   }
   onLoaad(){
 this.service.getUserById(this.userObj.id).subscribe(
   (data:any)=>{this.userObj=data;
   alert(JSON.stringify(data))
   }
 );
   }
 
   editUser(){
     
     this.service.updateUser(this.userObj.id,this.userObj).subscribe(
    (data: any)=>{
      alert("Editted Sucessfull");
      this.goToList();
    }
       );
   }
    goToList()
    {
      this.router.navigate(['userlist']);
    }
 }
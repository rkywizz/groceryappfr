import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userList1:User[]=[];
  id:number=0;

  constructor(private service:UsersServiceService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllUsers().subscribe(
   (data:any)=>{
     this.userList1=data;
     alert(JSON.stringify(data));
   }
 );
  }
deleteUser1(id:number){
let allow=confirm("Are you sure want to delete this user with id: "+id);
if(allow == true){
this.service.deleteUser1(id).subscribe(
  (data:any)=>{
    alert("Deleted !!!")
  }
);

}

}}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userObj:User;
  constructor(private router:Router,private service:RegisterServiceService) {
    this.userObj=new User();
   }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.registerUser(this.userObj).subscribe(
    (data:any)=>{
      alert("User Added Successfully!!!!!");
      
    }
  );  
  alert(JSON.stringify(this.userObj));
}
}

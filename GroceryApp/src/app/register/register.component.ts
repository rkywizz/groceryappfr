import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObj:User;
  constructor(private router:Router,private service:RegisterserviceService) {
    this.userObj=new User();
   }
  

   ngOnInit(): void {
  }
onSubmit(){
  this.service.registerUser(this.userObj).subscribe(
    (data:any)=>{
      alert("User Added Successfully!!!!!");
      alert(JSON.stringify(data));
    }
  );  

}
}

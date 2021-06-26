import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj:User;
  constructor(private router:Router,private service:RegisterServiceService) {
    this.userObj=new User();
   }

  ngOnInit(): void {
  }
onSubmit(){
  this.router.navigate(['product']);  

}
}

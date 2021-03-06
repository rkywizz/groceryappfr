import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
      errorMsg:string='';
    userObj:User;
      constructor(private router:Router,private service:UsersServiceService) {
        this.userObj=new User();
       }
    
      ngOnInit(): void {
      }
    onSubmit(){
      this.service.registerUser(this.userObj).subscribe(
        (success)=>{
          alert("Registered Successfully!!");
          
        },
        error=> {​​​​​​​​ 
          console.log(error.error);
          this.errorMsg = error.error;
                
         } );  
      
    }
    }
    
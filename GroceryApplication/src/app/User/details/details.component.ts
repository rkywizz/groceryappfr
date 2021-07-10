import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userObj:User=new User();
  constructor(private route1:ActivatedRoute,
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
 
  }
  );
  }
  }
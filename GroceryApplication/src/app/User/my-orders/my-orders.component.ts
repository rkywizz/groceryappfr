import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/Order/OrderClass/order-model.model';
import { User } from 'src/app/UserModel/user.model';
import { UsersServiceService } from 'src/app/UserService/users-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderList:OrderModel[]=[];

  userId:any;
  userObj:User=new User();
  orderObj:OrderModel=new OrderModel();
  errorMsg: string='';
 
  constructor(private route1:ActivatedRoute, private service:UsersServiceService,private route2:ActivatedRoute) { 
    route1.params.subscribe(params =>{
      this.userObj.id=params['loginId']
      }
      );
      route2.params.subscribe(params =>{
        this.orderObj.productId=params['oid']
        });
  }
  
  ngOnInit(): void {
  this.onLoaad();
  }
  onLoaad(){
    this.userId=localStorage.getItem("Login");
  this.service.getAllOrders(this.userId).subscribe(
  (data:any)=>{
    this.orderList=data;
    
  } );
  }
  cancelOrder(oid:number){
    let allow=confirm("Are you sure want to delete this user with id: "+oid);
    if(allow == true){
    this.service.cancelOrder(oid).subscribe(
      (data:any)=>{
        alert("Cancelled !!!")
      }
    );
  }
}

search(){
  this.orderList=[];
  this.service.searchOrder(this.orderObj.id).subscribe(
    (data:any)=>{
       this.orderList.push(data);
    },
    error=> {​​​​​​​​ 
      console.log(error.error);
      this.errorMsg = error.error;
            
        }
  );
   
}
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from '../OrderClass/order-model.model';
import { OrderServicesService } from '../OrderService/order-services.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList:OrderModel[]=[];
  id:number=0;

  constructor(private service:OrderServicesService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllOrders().subscribe(
   (data:any)=>{
     this.orderList=data;
     alert(JSON.stringify(data));
   }
 );
  }

  showOrder(id:number){
    alert(id);
  this.router.navigate(['orderdetails',id]);
  }
  deleteOrder(id:number){
    let allow=confirm("Are you sure want to delete this user with id: "+id);
    if(allow == true){
    this.service.deleteOrder(id).subscribe(
      (data:any)=>{
        alert("Deleted !!!")
      }
    );
    
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['orderlist']);
    }
    }
    

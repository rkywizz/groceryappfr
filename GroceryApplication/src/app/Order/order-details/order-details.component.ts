import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderModel } from '../OrderClass/order-model.model';
import { OrderServicesService } from '../OrderService/order-services.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  OrderObj:OrderModel=new OrderModel();
  constructor(private route1:ActivatedRoute,
    private service:OrderServicesService) { 
    route1.params.subscribe(params =>{
      this.OrderObj.id=params['id']
      }
      );
  }
  
  ngOnInit(): void {
  this.onLoaad();
  }
  onLoaad(){
  this.service.getOrderById(this.OrderObj.id).subscribe(
  (data:any)=>{this.OrderObj=data;
  alert(JSON.stringify(data))
  }
  );
  }
  }
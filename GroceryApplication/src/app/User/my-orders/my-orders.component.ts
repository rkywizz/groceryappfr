import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // loadData(){
  //   this.service.getAllOrders().subscribe(
  //     (data:any)=>{
  //       this.orderList=data;
  //       alert(JSON.stringify(data));
  //     }
  //   );
  //    }
   
}

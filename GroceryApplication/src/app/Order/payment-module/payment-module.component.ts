import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Product/productService/product-services.service';
import { OrderModel } from '../OrderClass/order-model.model';
import { OrderServicesService } from '../OrderService/order-services.service';

@Component({
  selector: 'app-payment-module',
  templateUrl: './payment-module.component.html',
  styleUrls: ['./payment-module.component.css']
})
export class PaymentModuleComponent implements OnInit {
  productIdList:number[]=[]
  productQList:number[]=[]
  totalSum:number=0;
  orderObj1:OrderModel=new OrderModel();
  orderList:OrderModel[]=[];
  count:number=0;
  login:string=<string>localStorage.getItem("Login");
  constructor(private service:ProductServicesService, private service2:OrderServicesService) { }

  ngOnInit(): void {
  this.productIdList=JSON.parse(<string>localStorage.getItem("cartIdList"));
  this.productQList=JSON.parse(<string>localStorage.getItem("cartQList"));
  this.totalSum=JSON.parse(<string>localStorage.getItem("totalSum"));
    console.log(this.orderObj1);
    console.log(this.productIdList);
    console.log(this.productQList);
    console.log(this.totalSum);
    console.log(this.productIdList.length);
  }
  onSubmit(){
    if(this.login==null){
      this.login=<string>localStorage.getItem("Admin");
    }
    console.log(this.orderObj1)
    for(var i=0;i<this.productIdList.length;i++)
    {
      alert(this.productIdList[i]+":"+this.productQList[i])

      console.log(i)
      this.orderObj1.productId=this.productIdList[i];
      this.orderObj1.quantity=this.productQList[i];
      console.log(this.orderObj1.productId);
      this.orderObj1.address=<string>localStorage.getItem("address");
      console.log(this.orderObj1);
      this.orderObj1.district=<string>localStorage.getItem("district");
      this.orderObj1.mobileNo=<string>localStorage.getItem("mobileNo");
      this.orderObj1.name=<string>localStorage.getItem("name");
      this.orderObj1.pincode=<string>localStorage.getItem("pincode");
      this.orderObj1.state=<string>localStorage.getItem("state");
      alert(JSON.stringify(this.orderObj1));
      this.orderList[i]=(this.orderObj1);
      alert(JSON.stringify(this.orderList));
      this.service2.booKProduct(this.login,this.orderObj1).subscribe(); 
      this.orderObj1=new OrderModel();
        
  }
  console.log(this.orderList);
}
}
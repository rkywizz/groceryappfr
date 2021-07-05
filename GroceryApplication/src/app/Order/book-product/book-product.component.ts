import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/Product/productClass/product-model.model';
import { User } from 'src/app/UserModel/user.model';
import { OrderModel } from '../OrderClass/order-model.model';
import { OrderServicesService } from '../OrderService/order-services.service';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent implements OnInit {
OrderObj:OrderModel=new OrderModel();

constructor(private router:Router,private service:OrderServicesService,private route1:ActivatedRoute) {
  route1.params.subscribe(params =>{
    this.OrderObj.productId=params['pid']
    });
}

ngOnInit(): void {
}
onSubmit(){
 
  const loginId=localStorage.getItem("Login");
this.service.booKProduct(loginId,this.OrderObj).subscribe(
 (data:any)=>{
   alert("Product Added Successfully!!!!!");
   
 }
);  
alert(JSON.stringify(this.OrderObj));
}
}

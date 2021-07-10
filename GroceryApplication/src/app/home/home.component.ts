import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from '../Order/OrderClass/order-model.model';
import { OrderServicesService } from '../Order/OrderService/order-services.service';
import { ProductModel } from '../Product/productClass/product-model.model';
import { ProductServicesService } from '../Product/productService/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:ProductModel[]=[];
  name:string='';
  constructor(private service:ProductServicesService,private router:Router) {

   }
  ngOnInit(){
 

  }
}
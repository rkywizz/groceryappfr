import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../productClass/product-model.model';
import { ProductServicesService } from '../productService/product-services.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:ProductModel[]=[];
  

  constructor(private service:ProductServicesService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllProducts().subscribe(
   (data:any)=>{
     this.productList=data;
     alert(JSON.stringify(data));
   }
 );
  }

}
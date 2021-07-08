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
  
name:string='';

totalRecords:string='';
page:number=1
  constructor(private service:ProductServicesService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllProducts().subscribe(
   (data:any)=>{
     this.productList=data;
     this.totalRecords=data.productList.length
     alert(JSON.stringify(data));
   }
 );
  }
search(){
  this.productList=[];
  this.service.searchProduct(this.name).subscribe(
    (data:any)=>{
      // this.productList.push(data);
      this.productList=data;
      alert(JSON.stringify(data));
    }
  );
   
}
}
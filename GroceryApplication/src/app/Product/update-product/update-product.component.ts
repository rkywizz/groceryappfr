import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../productClass/product-model.model';
import { ProductServicesService } from '../productService/product-services.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  myid:number = 0;
  productObj:ProductModel=new ProductModel();
     
   constructor(private router:Router,private route1:ActivatedRoute,
     private service:ProductServicesService) { 
     route1.params.subscribe(params =>{
       this.productObj.id=params['id']
       }
       );
   }
 
   ngOnInit(): void {
   this.onLoaad();
   }
   onLoaad(){
 this.service.getProductById(this.productObj.id).subscribe(
   (data:any)=>{this.productObj=data;
   alert(JSON.stringify(data))
   }
 );
   }
 
   editProduct(){
     
     this.service.updateProduct(this.productObj.id,this.productObj).subscribe(
    (data: any)=>{
      alert("Editted Sucessfull");
      this.goToList();
    }
       );
   }
    goToList()
    {
      this.router.navigate(['productcrud']);
    }
 }
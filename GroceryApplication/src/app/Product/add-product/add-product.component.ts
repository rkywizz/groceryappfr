import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../productClass/product-model.model';
import { ProductServicesService } from '../productService/product-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productObj:ProductModel=new ProductModel();
  constructor(private router:Router,private service:ProductServicesService) {
  
   }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.AddProduct(this.productObj).subscribe(
    (data:any)=>{
      alert("Product Added Successfully!!!!!");
      this.router.navigate(['productcrud']);
    }
  );  
  alert(JSON.stringify(this.productObj));
}
}

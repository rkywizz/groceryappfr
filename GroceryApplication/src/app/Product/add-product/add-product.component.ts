import { HttpClient } from '@angular/common/http';
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
  image:any;
  fd:FormData=new FormData();
  constructor(private router:Router,private service:ProductServicesService,private http:HttpClient) {
  
   }

  ngOnInit(): void {
  }
  public onFileChanged(event:any) {
    //Select File
    this.image = event.target.files[0];
  }
 
  
onSubmit(){
  this.service.AddProduct(this.productObj).subscribe(
    (data:any)=>{
      alert("Product Added Successfully!!!!!");
    }
  );  
  alert(JSON.stringify(this.productObj));
}
onUpload() {
  console.log(this.image);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.image, this.image.name);

  //Make a call to the Spring Boot Application to save the image
  this.http.post('http://localhost:8093/products/uploadimage/'+this.productObj.code, uploadImageData,{  responseType: 'text' as 'json'  })
    .subscribe((success) =>{  
    console.log(success)
    this.router.navigate(['productcrud'])}
    );
}
}
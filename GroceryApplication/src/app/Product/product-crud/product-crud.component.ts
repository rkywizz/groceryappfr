import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../productClass/product-model.model';
import { ProductServicesService } from '../productService/product-services.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCRUDComponent implements OnInit {
  productList:ProductModel[]=[];
  name:string='';
  constructor(private service:ProductServicesService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllProducts().subscribe(
   (data:any)=>{
     this. productList=data;
     alert(JSON.stringify(data));
   }
 );
// console.log(this.service.getAllUsers());
}
showProduct(id:number){
  alert(id);
this.router.navigate(['productlist']);
}
editProduct(id:number){
  alert(id);
  this.router.navigate(['updateproduct',id]);
  
}
deleteProduct(id:number){
let allow=confirm("Are you sure want to delete this user with id: "+id);
if(allow == true){
this.service.deleteProduct(id).subscribe(
  (data:any)=>{
    alert("Deleted !!!")
  }
);

}
this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['productcrud']);
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

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
cartData:string="";
stockStatus:string='order';
name:string='';
success:boolean=true;
totalRecords:string='';
page:number=1
errorMsg: string='';
  constructor(private service:ProductServicesService,private router:Router) {

   }
  ngOnInit(){
    this.loadData();

  }
loadData(){
 this.service.getAllProducts().subscribe(
   (data:any)=>{
     this.productList=data;
     this.totalRecords=data.productList;
     alert(JSON.stringify(data));
   }
 );
  }
search(){
  this.productList=[];
  this.service.searchProduct(this.name).subscribe(
    (data:any)=>{
      this.productList=data;  
    },
    error=> {​​​​​​​​ 
      console.log(error.error);
      this.errorMsg = error.error;
          
        }
  );
   
}
checkProduct(quantity:number)
{
  if(quantity==0){
    this.stockStatus="Sold Out!!!"
    this.success=true;
    return true;
  }
this.stockStatus="Order"
this.success=false;
return true;

}
checkStock(quantity:number){
  if(quantity==0){
    
    return true;

  }
  return false;

}
cartFunction(code:string){
  if(this.cartData.includes(code)){
    var c=confirm("Already in Cart. Do you want to remove it?");
    if(c){
      this.cartData=this.cartData.replace(code+",","");
      localStorage.setItem("cartraw",this.cartData);
    }
  }
  else{
    this.cartData=this.cartData+code+",";
    alert("Added to cart")
    localStorage.setItem("cartraw",this.cartData);
  }
}
}
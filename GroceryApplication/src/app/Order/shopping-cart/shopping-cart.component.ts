import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/Product/productClass/product-model.model';
import { ProductServicesService } from 'src/app/Product/productService/product-services.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productIdList:number[]=[];
  productQList:number[]=[];
  productList:ProductModel[]=[];
  product:ProductModel= new ProductModel();
  totalSum:number=0;
  cartData:string=<string>localStorage.getItem("cartraw");
  quantity:number=0;
  
    constructor(private service:ProductServicesService,private router:Router) { }
  
    ngOnInit(): void {
      this.loadData();
    }
    loadData(){
      this.service.getProductsinput(this.cartData,this.cartData.length).subscribe((s:ProductModel[])=>
      this.productList=s)
      alert(this.productList);
      }
  
    onClick(id:number,qs:string){
      var q = parseInt(qs);
      if(this.checkProductItems(id,q)){
        alert("Already Updated");
      }
      else{
        var index=this.productIdList.indexOf(id)
      if(index!=-1){
        this.productQList[index]=q;
      }
      else{
        this.productIdList.push(id);
        this.productQList.push(q);
      }
      
    }
    this.totalSum=this.getTotal(this.productIdList,this.productQList)
    console.log(this.productIdList)
    console.log(this.productQList)
    }
    remove(code:string){
      var c = confirm("Do you want to remove from cart")
      if(c){
        this.cartData=this.cartData.replace(code+",","");
        localStorage.setItem("cartraw",this.cartData);
        //refresh page
        // localStorage.removeItem("cartidraw")
  
      }
    }
    trim(price:string):number{
      return parseInt(price.slice(3))
    }
    checkProductItems(id:number,q:number):boolean{
      var r = false
      var index=this.productIdList.indexOf(id)
     if(index!=-1){
        if(this.productQList[index]==q){
          var r = true;
        }
     }
     return r;
    }
    getTotal(idlist:number[],qlist:number[]):number{
      var total:number = 0
      for(var i =0;i<idlist.length;i++){
          this.service.getProductById(this.productIdList[i]).subscribe((p:ProductModel)=>
         this.product=p);
         var value=this.trim(this.product.price)*qlist[i];
         total=total+value;
      }
      return total
    }
    onSubmit(){
      localStorage.setItem("cartIdList",JSON.stringify(this.productIdList));
      localStorage.setItem("cartQList",JSON.stringify(this.productQList));
      localStorage.setItem("totalSum",JSON.stringify(this.totalSum));
      this.router.navigate(['shipping'])
    }
    makenumber(s:string):number{
    var n= parseFloat(s);
    if(n>0){
      return n;
    }
    else{
      return 0;
    }
    }
  }
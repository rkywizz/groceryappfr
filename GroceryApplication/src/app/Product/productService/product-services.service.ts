import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../productClass/product-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  restApiUrl:string ="http://localhost:8093/products";
 
  msg:any;
  constructor(private http:HttpClient)  {
    
   }
   httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   AddProduct(product:ProductModel):Observable<string>{
  this.msg= this.http.post<string>(this.restApiUrl+"/add" ,product, {  responseType: 'text' as 'json'  });
  alert(JSON.stringify(this.msg));
  return this.msg;
    }
    getAllProducts():Observable<ProductModel>{
      return this.http.get<ProductModel>(this.restApiUrl+'/allproducts');
      }
  }
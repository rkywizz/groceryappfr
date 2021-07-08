import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../OrderClass/order-model.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {
  restApiUrl:string ="http://localhost:8093/Order";
 
  msg:any;
  constructor(private http:HttpClient)  {
    
   }
   httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  booKProduct(loginId:any,order:OrderModel):Observable<string>{
  this.msg= this.http.post<string>(this.restApiUrl+"/add/"+loginId,order, {  responseType: 'text' as 'json'  });
  alert(JSON.stringify(this.msg));
  return this.msg;
    }
    getAllOrders():Observable<OrderModel>{
      return this.http.get<OrderModel>(this.restApiUrl+'/allOrder');
      }
      deleteOrder(id:number):Observable<OrderModel>{
        return this.http.delete<any>(this.restApiUrl+"/delete?id="+id,{  responseType: 'text' as 'json'  });
        }
        getOrderById(id:number):Observable<OrderModel>{
          return this.http.get<OrderModel>(this.restApiUrl+"/bookproducts/byPk/"+id);
          }
          searchOrder(id:number):Observable<OrderModel[]>{
            return this.http.get<OrderModel[]>("http://localhost:8093/Order/bookproducts/byPk/"+id);
          }
  }
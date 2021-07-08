import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../Order/OrderClass/order-model.model';
import { User } from '../UserModel/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  restApiUrl:string ="http://localhost:8093/user";
 
  msg:any;
  constructor(private http:HttpClient)  {
    
   }
   httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
   registerUser(user1:User):Observable<string>{
  this.msg= this.http.post<string>(this.restApiUrl+"/add" ,user1, {  responseType: 'text' as 'json'  });
  alert(JSON.stringify(this.msg));
  return this.msg;
    }

    loginCheck(userobject:User):Observable<string | User>
    {
      return this.http.get<string | User>(this.restApiUrl+"/authuser/"+ userobject.loginId+"/"+userobject.password,{  responseType: 'text' as 'json'  });
    }


    loginCheckadmin(userobject:User):Observable<string | User>
    {
      return this.http.get<string | User>(this.restApiUrl+"/authadmin/"+ userobject.loginId+"/"+userobject.password,{  responseType: 'text' as 'json'  });
    }

    getAllUsers():Observable<User>{
      return this.http.get<User>(this.restApiUrl+'/alluser');
      }
     
        deleteUser1(id:Number):Observable<User>{
          return this.http.delete<any>(this.restApiUrl+"/delete?id="+id,{  responseType: 'text' as 'json'  });
          }
          getUserById(id:number):Observable<User>{
            return this.http.get<User>(this.restApiUrl+"/bypk/"+id);
            }
            getUserByLoginId(loginId:string):Observable<User>{
              return this.http.get<User>(this.restApiUrl+"/bylogin/"+loginId);
              }
          updateUser(user1:User):Observable<User>{
            return this.http.put<User>(this.restApiUrl+"/update",user1,{  responseType: 'text' as 'json'  });
            }
             getAllOrders(loginId:string):Observable<OrderModel>{
              return this.http.get<OrderModel>(this.restApiUrl+'/allorder?userLogin='+loginId);
               }
               cancelOrder(id:number):Observable<string>{
                return this.http.get<string>("http://localhost:8093/Order/cancelorder?id="+id,{  responseType: 'text' as 'json'  });
                }
                searchOrder(id:number):Observable<OrderModel[]>{
                  return this.http.get<OrderModel[]>("http://localhost:8093/Order/bookproducts/byPk/"+id);
                }
                searchUser(loginId:string):Observable<User[]>{
                  return this.http.get<User[]>(this.restApiUrl+"/bylogin/"+loginId);
                }
      }
      
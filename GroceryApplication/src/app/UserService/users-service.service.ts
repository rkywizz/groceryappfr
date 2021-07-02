import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    
  }

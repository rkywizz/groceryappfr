import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  restApiUrl:string ="http://localhost:8093/user/add";
  // httpOptions={
  //   headers:new HttpHeaders({
  //     'Content-Type':'application/json'
  //   })
  // }  
  msg:any;
  constructor(private http:HttpClient)  {
    
   }
   httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   registerUser(user1:User):Observable<string>{
  this.msg= this.http.post<string>(this.restApiUrl ,user1, {  responseType: 'text' as 'json'  });
  alert(JSON.stringify(this.msg));
  return this.msg;
    }
  }

 
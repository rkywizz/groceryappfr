import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

restApiUrl:string ="http://localhost:3000/User";
httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}  
constructor(private http:HttpClient)  {
  
 }
 registerUser(user1:User):Observable<User>{
  return this.http.post<User>(this.restApiUrl,user1,this.httpOptions);
  }
}

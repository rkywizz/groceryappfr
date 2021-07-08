import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
 
 
  constructor() {}

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("Login");
  localStorage.removeItem("Admin");
}
checkLogin()
  {
    if((!!localStorage.getItem("Login")) || (!!localStorage.getItem("Admin")))
    {
      
      return true;
    }
    return false;
  }
  checkLogout()
  {
    if((!!localStorage.getItem("Login"))|| (!!localStorage.getItem("Admin")))
    {
      
      return false;
    }
    return true;
  }
  checkAdmin(){
if(localStorage.getItem("Admin")){
      
  return true;
}
return false;
}
checkCustomer(){
  if(localStorage.getItem("Login")){
      
    return true;
  }
  return false;
  }
}
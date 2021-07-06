import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  // const loginId=localStorage.getItem("ID");
  id:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

editUser(){
  this.id=localStorage.getItem("Login");
  alert(this.id);
  this.router.navigate(['updateuser',this.id]);
  
}
showUser(){
  this.id=localStorage.getItem("Login");
  alert(this.id);
this.router.navigate(['myprofile',this.id]);
}
showOrder(){
  this.id=localStorage.getItem("Login");
  alert(this.id);
this.router.navigate(['myorders',this.id]);
}
}

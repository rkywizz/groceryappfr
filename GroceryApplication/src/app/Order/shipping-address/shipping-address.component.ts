import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  address: string='';
  country: string='';
  district: string='';
  emailId: string='';
  mobileNo: string='';
  name: string='';
  pincode: string='';
  state: string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 onSubmit(){
  localStorage.setItem("address",this.address);
  localStorage.setItem("district",this.district);
  localStorage.setItem("emailId",this.emailId);
  localStorage.setItem("mobileNo",this.mobileNo);
  localStorage.setItem("name",this.name);
  localStorage.setItem("pincode",this.pincode);
  localStorage.setItem("state",this.state);
  this.router.navigate(['payment'])
 }
}
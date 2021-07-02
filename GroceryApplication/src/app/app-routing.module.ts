import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { AdminLoginComponent } from './User/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { RegisterAdminComponent } from './User/register-admin/register-admin.component';
import { RegisterCustomerComponent } from './User/register-customer/register-customer.component';
import { UserLoginComponent } from './User/user-login/user-login.component';

const routes: Routes = [
  {path:'registercustomer',component:RegisterCustomerComponent},
  {path:'registeradmin',component:RegisterAdminComponent},
  {path:'registeruser',component:RegisterCustomerComponent},
  {path:'loginadmin',component:AdminLoginComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'loginuser',component:UserLoginComponent},
  {path:'forget',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

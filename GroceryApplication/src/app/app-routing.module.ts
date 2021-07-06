import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookProductComponent } from './Order/book-product/book-product.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductCRUDComponent } from './Product/product-crud/product-crud.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { AdminLoginComponent } from './User/admin-login/admin-login.component';
import { DetailsComponent } from './User/details/details.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { RegisterAdminComponent } from './User/register-admin/register-admin.component';
import { RegisterCustomerComponent } from './User/register-customer/register-customer.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';

const routes: Routes = [
  {path:'registercustomer',component:RegisterCustomerComponent},
  {path:'registeradmin',component:RegisterAdminComponent},
  {path:'registeruser',component:RegisterCustomerComponent},
  {path:'loginadmin',component:AdminLoginComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'loginuser',component:UserLoginComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'userlist',component:UserDetailComponent},
  {path:'updateuser/:id',component:UpdateUserComponent},
  {path:'detailsuser/:id',component:DetailsComponent},
  {path:'productcrud',component:ProductCRUDComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'updateproduct/:id',component:UpdateProductComponent},
  {path:'productcrud',component:ProductCRUDComponent},
  {path:'order/:pid',component:BookProductComponent},
  {path:'orderlist',component:OrderListComponent},
  {path:'orderdetails/:id',component:OrderDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

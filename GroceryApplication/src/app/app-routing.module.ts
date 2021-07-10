import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BookProductComponent } from './Order/book-product/book-product.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { PaymentModuleComponent } from './Order/payment-module/payment-module.component';
import { ShippingAddressComponent } from './Order/shipping-address/shipping-address.component';
import { ShoppingCartComponent } from './Order/shopping-cart/shopping-cart.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductCRUDComponent } from './Product/product-crud/product-crud.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { AdminDashboardComponent } from './User/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './User/admin-login/admin-login.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { CustomerDashboardComponent } from './User/customer-dashboard/customer-dashboard.component';
import { DetailsComponent } from './User/details/details.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { MyProfileComponent } from './User/my-profile/my-profile.component';
import { RegisterAdminComponent } from './User/register-admin/register-admin.component';
import { RegisterCustomerComponent } from './User/register-customer/register-customer.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
  {path:'registercustomer',component:RegisterCustomerComponent},
  {path:'registeradmin',component:RegisterAdminComponent},
  {path:'registeruser',component:RegisterCustomerComponent},
  {path:'loginadmin',component:AdminLoginComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'loginuser',component:UserLoginComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'userlist',component:UserDetailComponent},
  {path:'updateuser/:loginId',component:UpdateUserComponent},
  {path:'detailsuser/:id',component:DetailsComponent},
  {path:'productcrud',component:ProductCRUDComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'updateproduct/:id',component:UpdateProductComponent},
  {path:'productcrud',component:ProductCRUDComponent},
  {path:'order/:pid',component:BookProductComponent},
  {path:'orderlist',component:OrderListComponent},
  {path:'orderdetails/:id',component:OrderDetailsComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'myprofile/:loginId',component:MyProfileComponent},
  {path:'myorders/:loginId',component:MyOrdersComponent},
  {path:'myorders/:oid',component:MyOrdersComponent},
  {path:'payment',component:PaymentModuleComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'shipping',component:ShippingAddressComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'changepassword',component:ChangePasswordComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

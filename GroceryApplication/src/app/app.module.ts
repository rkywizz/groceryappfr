import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './User/register-customer/register-customer.component';
import { RegisterAdminComponent } from './User/register-admin/register-admin.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { AdminLoginComponent } from './User/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { ProductCRUDComponent } from './Product/product-crud/product-crud.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { BookProductComponent } from './Order/book-product/book-product.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { DetailsComponent } from './User/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    RegisterAdminComponent,
    UserDetailComponent,
    UserLoginComponent,
    AdminLoginComponent,
    ForgetPasswordComponent,
    ProductCRUDComponent,
    ProductListComponent,
    BookProductComponent,
    OrderListComponent,
    MenubarComponent,
    ChangePasswordComponent,
    UpdateUserComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

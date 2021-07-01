import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './delete/user/user.component';
import { DeleteComponent } from './user/delete/delete.component';
import { SearchComponent } from './user/search/search.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { FindByLoginComponent } from './user/find-by-login/find-by-login.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { SearchProductComponent } from './product/search-product/search-product.component';
import { BookOrderComponent } from './oder/book-order/book-order.component';
import { CancelOrderComponent } from './oder/cancel-order/cancel-order.component';
import { UpdateOrderComponent } from './oder/update-order/update-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuBarComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductComponent,
    UpdateuserComponent,
    UserComponent,
    DeleteComponent,
    SearchComponent,
    ForgotpasswordComponent,
    FindByLoginComponent,
    ChangePasswordComponent,
    AdminLoginComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    SearchProductComponent,
    BookOrderComponent,
    CancelOrderComponent,
    UpdateOrderComponent,

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

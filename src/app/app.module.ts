import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from "./app-routing.module";
import { MaterialModule } from "./shared/module/material.module";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './shared/component/auth/auth.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { FairsCardComponent } from './shared/component/fairs/fairs-card/fairs-card.component';
import { FairsDetailComponent } from './shared/component/fairs/fairs-detail/fairs-detail.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductFormComponent } from "./shared/component/products/product-form/product-form.component";
import { SingleProductComponent } from './shared/component/products/single-product/single-product.component';
import { UsersComponent } from './shared/component/users/users.component';
import { SingleUserComponent } from './shared/component/users/single-user/single-user.component';
import { NavBarComponent } from './shared/component/nav-bar/nav-bar.component';
import { FormUserComponent } from "./shared/component/users/form-user/form-user.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FairsComponent,
    FairsCardComponent,
    FairsDetailComponent,
    GetConfirmComponent,
    HomeComponent,
    ProductsComponent,
    ProductFormComponent,
    SingleProductComponent,
    UsersComponent,
    SingleUserComponent,
    NavBarComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { SingleProductComponent } from "./shared/component/products/single-product/single-product.component";
import { ProductFormComponent } from "./shared/component/products/product-form/product-form.component";
import { FormUserComponent } from "./shared/component/users/form-user/form-user.component";
import { SingleUserComponent } from "./shared/component/users/single-user/single-user.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path:"users",
        component: UsersComponent,
    },
    {
        path:"users/add",
        component:FormUserComponent
    },
    {
        path:"users/:id",
        component:SingleUserComponent
    },
    {
        path:"users/:id/edit",
        component:FormUserComponent
    },
    {
        path:"products",
        component: ProductsComponent,
    },
    {
        path:"addProduct",
        component:ProductFormComponent,
    },
    {
        path:"products/:id/edit",
        component: ProductFormComponent,
    },
    {
        path:"products/:id",
        component: SingleProductComponent,
    },
    {
        path:"fairs",
        component: FairsComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}
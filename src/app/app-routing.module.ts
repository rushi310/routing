import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { SingleProductComponent } from "./shared/component/products/single-product/single-product.component";
import { ProductFormComponent } from "./shared/component/products/product-form/product-form.component";

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
        path:"products",
        component: ProductsComponent,
    },
    {
        path:"addProduct",
        component:ProductFormComponent,
    },
    {
        path:"products/:id",
        component: SingleProductComponent,
    },
    {
        path:":id/edit",
        component: ProductFormComponent,
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
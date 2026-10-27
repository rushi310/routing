import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/service/product.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  productObj!: IProduct;
  productId!: string;
  constructor(private _productService: ProductService,
    private _routes: ActivatedRoute,
    private _matDialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productId = this._routes.snapshot.params['id']
    if (this.productId) {
      this._productService.fetchProductById(this.productId)
        .subscribe({
          next: res => {
            this.productObj = res
          },
          error: err => {
            console.log(err)
          }
        })
    }
  }

  onRemove() {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure you want to remove the product with id ${this.productId}`;
    let _matDialogRef = this._matDialog.open(GetConfirmComponent, config);
    _matDialogRef.afterClosed().pipe(
      tap(res=>console.log(`Before filter`,res)),
      filter(res=>res),
      tap(res=>console.log(`After filter`,res)),
      switchMap(()=>this._productService.onRemoveProduct(this.productId))
    )
    .subscribe({
      next:res=>{
        this._router.navigate(['/products']);
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}

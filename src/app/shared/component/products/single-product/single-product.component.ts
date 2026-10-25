import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/service/product.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  productObj!:IProduct;
  productId!:string;
  constructor(private _productService: ProductService,
    private _routes: ActivatedRoute,
    private _matDialog: MatDialog,
    private _router:Router,
    private _snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._routes.params.subscribe(params =>{
      this.productId = params['id']!;
      this._productService.fetchProductById(this.productId).subscribe({
        next: (data:IProduct) =>{
          this.productObj = data
        },
        error:(err)=>{
          console.error('Error fetching product', err)
        }
      })
    })
  }

  onRemove(){
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure you want to remove the product with it ${this.productId}`;
    let _matDialogRef = this._matDialog.open(GetConfirmComponent, config);
    _matDialogRef.afterClosed().subscribe((getConfirm)=>{
      if(getConfirm){
        this._productService.onRemoveProduct(this.productId).subscribe({
          next:(res)=>{
            this._snackBar.openSnackBar(res.msg);
            this._router.navigate(['products']);
          }
        })
      }
    })
  }
  
}

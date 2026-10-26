import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/service/product.service';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  isInEditMode: boolean = false;
  productsForm!: FormGroup;
  productId!: string;
  productObj!: IProduct;
  disableSubmitBtn: boolean = false
  constructor(private _productService: ProductService,
    private _snackBar: SnackBarService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onPatchDataInForm();
    this._routes.queryParams.subscribe((res)=>{
      console.log(res);
      if(res['cr']===0){
        this.productsForm.disable();
        this.disableSubmitBtn = true
      }else{
        this.productsForm.enable();
        this.disableSubmitBtn = false
      }
    })
  }

  onPatchDataInForm(){
    this.createProductForm()
  }
  createProductForm() {
    this.productsForm = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl('Pending'),
      camReturn: new FormControl(0)
    })
  }
  get getControls() {
    return this.productsForm.controls;
  }
  onAddProduct() {
    if (this.productsForm.invalid) {
      this.productsForm.markAllAsTouched();
      return;
    } else {
      let NEW_OBJ: IProduct = {
        ...this.productsForm.value,
        pId: Date.now().toString(),
      };
      this._productService.createProduct(NEW_OBJ).subscribe({
        next: (res) => {
          this._snackBar.openSnackBar(res.msg);
          this.productsForm.reset();
          this._router.navigate(['products']);
        },
        error: (err) => {
          this._snackBar.openSnackBar(err)
        }
      })
    }

  }
  onUpdateProduct() {
    if (this.productsForm.invalid) {
      this.productsForm.markAllAsTouched();
      return;
    } else {
      let UPDATED_OBJ: IProduct = {
        ...this.productsForm.value,
        pId: this.productId,
      };
      this._productService.onUpdateProduct(UPDATED_OBJ).subscribe({
        next: (res) => {
          this._snackBar.openSnackBar(res.msg);
          this.productsForm.reset();
          this.isInEditMode = false;
          this._router.navigate(['products']);
        },
        error: (err) => {
          this._snackBar.openSnackBar(err);
        },
      });
    }
  }
}


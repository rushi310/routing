import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/model/Iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  isInEditMode:boolean = false;
  productsForm!:FormGroup;
  productId!:string;
  productObj!: IProduct;
  constructor() { }

  ngOnInit(): void {
  }
  onAddProduct(){

  }
  onUpdateProduct(){

  }
}

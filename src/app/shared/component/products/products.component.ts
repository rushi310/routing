import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/Iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  getAllProducts: IProduct[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this._productService.fetchData().subscribe({
      next: (res) => {
        this.getAllProducts = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

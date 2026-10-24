import { Injectable } from '@angular/core';
import { IProduct } from "../model/Iproduct";
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    productsArr: IProduct[] = [
    { pName: 'Laptop', pId: '1001', pStatus: 'Delivered', canReturn: 1 },
    { pName: 'Headphones', pId: '1002', pStatus: 'Shipped', canReturn: 0 },
    { pName: 'Keyboard', pId: '1003', pStatus: 'Pending', canReturn: 1 },
  ];

  constructor() { }
  fetchAll():Observable<IProduct[]>{
    return of(this.productsArr)
  }
}

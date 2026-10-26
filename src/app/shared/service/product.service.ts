import { Injectable } from '@angular/core';
import { IProduct } from "../model/Iproduct";
import { Observable, of} from 'rxjs';
import { Ires } from '../model/Ires';

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

  fetchProductById(Id:string): Observable<IProduct>{
    let Product_OBJ = this.productsArr.find((p) => p.pId === Id)!;
    return of(Product_OBJ)
  }
  createProduct(productObj: IProduct):Observable<Ires<IProduct>>{
    this.productsArr.unshift(productObj)
    return of({
      msg: `New Product with id ${productObj.pId} is added successfully......!`,
      data: productObj
    })
  }
  onRemoveProduct(Id:string):Observable<Ires<IProduct>>{
    let GETINDEX = this.productsArr.findIndex(p => p.pId === Id);
    let arr = this.productsArr.splice(GETINDEX,1);
    return of({
      msg:`The product with id $[Id] is removed successfully.....!`,
      data: arr[0]
    })
  }
    onUpdateProduct(productObj : IProduct) : Observable<Ires<IProduct>>{
    let GETINDEX = this.productsArr.findIndex(p => p.pId === productObj.pId);
    this.productsArr[GETINDEX] = productObj;
    return of({
      msg : `Product with id ${productObj.pId} is updated successfully...!`,
      data : productObj
    })
  }
}

import { Injectable } from '@angular/core';
import { IProduct } from "../model/Iproduct";
import { Observable, of, map} from 'rxjs';
import { Ires } from '../model/Ires';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    // productsArr: IProduct[] = [
    // { pName: 'Laptop', pId: '1001', pStatus: 'Delivered', canReturn: 1 },
    // { pName: 'Headphones', pId: '1002', pStatus: 'Shipped', canReturn: 0 },
    // { pName: 'Keyboard', pId: '1003', pStatus: 'Pending', canReturn: 1 },
  // ];
  Base_url:string=environment.base_url
  Prod_url:string=`${this.Base_url}/products.json`

  constructor(private _http:HttpClient) { }
  
  fetchData():Observable<IProduct[]>{
    return this._http.get<any>(this.Prod_url)
    .pipe(
      map(obj=>{
        let productsArr : Array<IProduct> = []
        for(const key in obj){
          productsArr.push({
            ...obj[key],
            pId:key
          })
        }
        return productsArr
      })
    )

  }
  fetchProductById(Id:string): Observable<IProduct>{
    let url =`${this.Base_url}/products/${Id}.json`
    return this._http.get<IProduct>(url)
  }
  createProduct(data: IProduct):Observable<IProduct>{
  return this._http.post<IProduct>(this.Prod_url,data)
  }
onUpdateProduct(data: IProduct): Observable<Ires<IProduct>> {
  const updateUrl = `${this.Base_url}/products/${data.pId}.json`;
  return this._http.patch<Ires<IProduct>>(updateUrl, data);
}

onRemoveProduct(id: string): Observable<any> {
  const removeUrl = `${this.Base_url}/products/${id}.json`;
  return this._http.delete<any>(removeUrl);
}
}

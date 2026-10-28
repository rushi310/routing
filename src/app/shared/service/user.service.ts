import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/Iuser';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    Base_url:string = environment.base_url
    User_url:string = `${this.Base_url}/users.json`
  constructor(private _http:HttpClient) { }


    fetchData():Observable<IUser[]>{
    return this._http.get<any>(this.User_url).pipe(
        map(obj =>{
          let usersArr :Array<IUser> = [];
          for (const key in obj){
            usersArr.push({
              ...obj[key],
              userId:key
            });
          }
          return usersArr;
        })
      )
  }

  fetchUserById(id:string):Observable<IUser>{
    let url=`${this.Base_url}/users/${id}.json`
    return this._http.get<IUser>(url)
  }
}

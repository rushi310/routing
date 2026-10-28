
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/Iuser';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr:IUser[]=[]
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.getData()
  }
  trackById(index:number,user:IUser){
    return user.userId
  }
  getData(){
    this._userService.fetchData().subscribe({
      next:res=>{
        this.usersArr = res
      },
      error:err=>{
        console.log(err)
      }
    })
  }

}

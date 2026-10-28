import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/model/Iuser';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  userDetails!:IUser
  userId!:string
  constructor(private _userService:UserService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['id']
    if(this.userId){
      this._userService.fetchUserById(this.userId).subscribe({
        next:res =>{
          this.userDetails = res
        },
        error:err=>{
          console.log(err)
        }
      })
    }
  }

  onRemove(){

  }
}

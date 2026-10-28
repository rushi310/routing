import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  isInEditMode:boolean = false
  userForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(){

  }
}

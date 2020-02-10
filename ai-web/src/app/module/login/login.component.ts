import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validationMessage = {
    email: [
      {type: 'required', message: 'Nhập đủ thông tin'},
      {type: 'email', message: 'Nhập đúng email'}
    ],
    password: [
      {type: 'required', message: 'Nhập mật khẩu'},
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
}

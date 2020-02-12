import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../model/user.model';

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
  constructor(public authService: AuthService) {
    this.createForm();
  }

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
  loginSubmit() {
    const email: string = this.loginForm.get('email').value;
    const password: string = this.loginForm.get('password').value;
    const user: UserModel = new UserModel();
    user.email = email;
    user.password = password;
    this.authService.doLogin(user).then(result => {
      console.log('result: ' + result.toString());
      let currUser = AuthService.getCurrUser();
      console.log('currUser: ' + currUser.email);
    }, err => {
      console.log('err: ' + err);
    });
  }
}

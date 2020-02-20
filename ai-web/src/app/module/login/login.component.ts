import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../model/user.model';
import {Router} from '@angular/router';

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

  constructor(public authService: AuthService, public router: Router) {
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

      this.authService.getCurrentUser().then(currUser => {
        console.log('result: ' + currUser.uid);
        localStorage.setItem('uid', currUser.uid);
        this.router.navigate(['/home']);
      });
    }, err => {
      console.log('err: ' + err);
      // this.router.navigate(['/login']);
    });
  }
}

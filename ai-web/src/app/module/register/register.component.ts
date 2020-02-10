import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validationMessage = {
    email: [
      {type: 'required', message: 'Nhập đủ thông tin'},
      {type: 'email', message: 'Nhập đúng email'}
    ],
    password: [
      {type: 'required', message: 'Nhập mật khẩu'},
    ]
  };

  constructor(
    private fb: FormBuilder,
    public authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  creatUser() {
    const email: string = this.registerForm.get('email').value;
    const password: string = this.registerForm.get('password').value;
    const user: UserModel = new UserModel();
    user.email = email;
    user.password = password;
    this.authService.doRegister(user).then(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });

  }
}

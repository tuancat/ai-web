import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  async reloadData() {
    let request = this.userService.getUsers().toPromise();
    let respone = await Promise.resolve(request);
    // if (respone.)
  }
}

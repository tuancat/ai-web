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

  async ngOnInit() {
    console.log('reload data');
    await this.reloadData();
  }

  async reloadData() {
    let request = this.userService.getUsers().toPromise();
    let respone = await Promise.resolve(request);
    this.userService.getUsers().subscribe(value => {

      console.log('res:' + value.length);
    })
    // respone.forEach(value => {
    //
    //   console.log('res:' + value.payload.doc.id);
    // })

    // if (respone.)
    // if (respone.)
  }
}

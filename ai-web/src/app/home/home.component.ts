import {Component, OnInit} from '@angular/core';
import {Page} from '../model/Page';
import {LeftSidemenuComponent} from '../module/left-sidemenu/left-sidemenu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public leftMenuComponent: LeftSidemenuComponent) {
  }

  ngOnInit() {
  }

}

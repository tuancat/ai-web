import { Component, OnInit } from '@angular/core';
import {Page} from '../../model/Page';

@Component({
  selector: 'app-left-sidemenu',
  templateUrl: './left-sidemenu.component.html',
  styleUrls: ['./left-sidemenu.component.scss']
})
export class LeftSidemenuComponent implements OnInit {
  appPage: Page = new Page();
  currPage: string = this.appPage.home;
  constructor() { }

  ngOnInit() {
  }

  changePage(pageName: string) {
    this.currPage = pageName;
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  openedMobileMenu: boolean;

  constructor() {
    this.openedMobileMenu = false;
  }

  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
}

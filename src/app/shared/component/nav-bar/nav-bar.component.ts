import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isMenuOpen = false;

  links = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/users', label: 'Users', icon: 'people' },
    { path: '/products', label: 'Products', icon: 'inventory_2' },
    { path: '/fairs', label: 'Fairs', icon: 'event' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

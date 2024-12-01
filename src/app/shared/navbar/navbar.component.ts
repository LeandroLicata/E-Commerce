import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isCollapsed = true;
  isMobile = false

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Cambia el tamaño si es necesario
    if (!this.isMobile) {
      this.isCollapsed = false; // Siempre visible en desktop
    } else {
      this.isCollapsed = true; // Colapsado en mobile
    }
  }

  toggleNavbar() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed; // Solo afecta en mobile
    }
  }
}

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
  logoUrl: string = 'assets/images/LeandroMarketAlt';

  isCollapsed = true;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;

    this.logoUrl = this.isMobile
      ? 'assets/images/LeanMarketSmall.png'
      : 'assets/images/LeandroMarketAlt.png';

    if (!this.isMobile) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  toggleNavbar() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  onSearch(query: string) {
    if (query.trim()) {
      console.log('Buscando:', query);
      // Lógica adicional como navegar a una página de resultados o filtrar productos
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.css',
})
export class FeaturedCategoriesComponent {
  categories = [
    { name: 'Electrónica', image: 'assets/images/electronics.jpg' },
    { name: 'Ropa', image: 'assets/images/clothing.jpg' },
    { name: 'Hogar', image: 'assets/images/home.webp' },
    { name: 'Juguetes', image: 'assets/images/toys.webp' },
  ];
}

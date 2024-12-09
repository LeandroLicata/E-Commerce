import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

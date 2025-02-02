import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../../model/product-category';
import {CategoryService} from '../../services/category.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent implements OnInit{
  categories: ProductCategory[] = [];
  dropdownOpen = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Errore nel caricamento delle categorie:', err);
      }
    });
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

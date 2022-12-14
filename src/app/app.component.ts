import { Component, OnInit } from '@angular/core';
import { Product } from './Interfaces/product';
import { UserDetails } from './Interfaces/user-details';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'QorbaTask';

  constructor(private service: ApiService) {}

  products: Product[] = [];
  categories: string[] = [];

  selectedCategory: string = '';
  jwtToken: string = '';

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => {
      this.products = data.products;
      // console.log(data);
    });

    this.service.getAllCategories().subscribe(
      data => this.categories = data
    );
    
  }

  changeCategory(newCategory: string){
    this.selectedCategory = newCategory;
    console.log("Category in parent : ", this.selectedCategory);
    this.service.getProductsOfCategory(newCategory).subscribe(
      data => this.products = data.products
    );
    console.log('Changed products');
  }

  searchForProduct(searchString: string){
    this.service.getProductSearch(searchString).subscribe(
      data => this.products = data.products
    );
  }


}

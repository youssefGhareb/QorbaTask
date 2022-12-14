import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Product } from '../Interfaces/product';
import { ProductsResponse } from '../Interfaces/products-response';
// import { UserDetails } from '../Interfaces/user-details';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiBaseURL: string = 'https://dummyjson.com/';

  constructor(private client: HttpClient) {}

  getAllProducts(): Observable<ProductsResponse> {
    return this.client.get<ProductsResponse>(this.apiBaseURL + "products");
  }

  getAllCategories(): Observable<string[]> {
    return this.client.get<string[]>(this.apiBaseURL + "products/categories");
  }

  getProductsOfCategory(category:string) : Observable<ProductsResponse> {
    return this.client.get<ProductsResponse>(this.apiBaseURL + "products/category/" + category);
  }

  getProductSearch(searchString:string) : Observable<ProductsResponse> {
    return this.client.get<ProductsResponse>(this.apiBaseURL + "products/search?q=" + searchString);
  }
}

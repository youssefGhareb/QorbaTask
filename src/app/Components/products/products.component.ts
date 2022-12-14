import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  page:number = 1;
  count: number = 0;
  size: number =9;
  sizes: number[] = [5,10,15,20];
  // constructor(private service:ApiService){ }
  @Input() 
  set products(value:Product[]){
    this._products = value;
    // console.log("Change");
  }
  get products(){
    return this._products;
  }
  
  private _products:Product[] = [];

  onProductsChangeData(event:any){
    this.page = event;
  }

  // ngOnInit(): void {
  //   this.getAllProducts()
  // }

  // getAllProducts(): void{
  //   this.service.getAllProducts().subscribe( data  => {
  //     this.products = data.products
  //     console.log(data)
  //   } )
  // }
}

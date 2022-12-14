import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  // constructor(private service: ApiService){}

  @Input()
  set categories(value: string[]) {
    this._categories = value;
    // console.log('Change category: ', this._categories );
  }
  get categories() {
    return this._categories;
  }
  private _categories: string[] = [];

  @Output() newCategorySelected = new EventEmitter<string>();

  selectCategory(selectedCategory:string){
    console.log("Emitting: ", selectedCategory);
    this.newCategorySelected.emit(selectedCategory);
  }
  // ngOnInit(): void{
  //   this.getCategories();
  // }

  // getCategories(): void {
  //   this.service.getAllCategories().subscribe(
  //     data => this.categories = data
  //   )
  // }
}

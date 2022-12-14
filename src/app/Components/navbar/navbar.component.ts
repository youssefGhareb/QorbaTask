import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();
  constructor(private auth:AuthService, private router:Router){}

  searchFun(searchString: string) {
    this.search.emit(searchString);
  }

  logout():void{
    this.auth.logOut();
    this.router.navigate(["/login"]);
  }
}

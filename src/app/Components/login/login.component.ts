import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Interfaces/user-details';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  errorMsg: string = '';
  user: UserDetails = {} as UserDetails;

  ngOnInit(): void {}

  getUser(username: string, password: string) {
    console.log(username, password);

    this.auth.authenticateUser(username, password).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
        console.log('true');

        this.errorMsg = '';
        this.auth.logIn();
        this.user = {} as UserDetails;
        
      },
      (err) => {
        console.log('false');
        this.errorMsg = 'Wrong username or password. Please try again.';
      },
      () => this.router.navigate(['shop'])
    );
  }
}

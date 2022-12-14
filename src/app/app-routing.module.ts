import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ShopComponent } from './Components/shop/shop.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent, canActivate:[AuthGuard] },
  { path:"", redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

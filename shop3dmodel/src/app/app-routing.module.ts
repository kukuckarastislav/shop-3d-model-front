import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:name', component: HomeComponent },
  { path: 'category/:category', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'products/:id', component: UserProductsComponent },
    ]
  },
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { SalesComponent } from './pages/sales/sales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:name', component: HomeComponent },
  { path: 'category/:category', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'my-purchases', component: PurchasesComponent },
  { path: 'my-sales', component: SalesComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'products/:id', component: UserProductsComponent },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

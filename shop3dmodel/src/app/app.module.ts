import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './components/rating/rating.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CardS3mComponent } from './components/card-s3m/card-s3m.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './pages/user/user.component';
import { UserProductsComponent } from './components/user-products/user-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatingComponent,
    HomeNavbarComponent,
    AvatarComponent,
    CardS3mComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    UserComponent,
    UserProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

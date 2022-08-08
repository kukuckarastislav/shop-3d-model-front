import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatingComponent,
    HomeNavbarComponent,
    AvatarComponent,
    CardS3mComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

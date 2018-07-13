import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home/home.component';
import { ProductDetailsComponent } from './pdp/product-details.component';
import { ProductListComponent } from './plp/product-list.component';
import { ProductListService } from './services/plp/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component : HomePageComponent},
        {path: 'plp', component: ProductListComponent},
        {path: 'pdp/:productId', component: ProductDetailsComponent}
      ])
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './navbar/navbar.component';
import { Products, ProductsComponent } from "./products/products.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HttpClientModule, MatCardModule, MatButtonModule, MatDialogModule, CommonModule, HomeComponent, ProductsComponent]
})
export class AppComponent {
  setedProduct:Products;

  constructor() {}

  productdataFromNavbar: Products | any;
  setProducts(event:any){
    this.productdataFromNavbar = event
    this.setedProduct = this.productdataFromNavbar;
  }
}




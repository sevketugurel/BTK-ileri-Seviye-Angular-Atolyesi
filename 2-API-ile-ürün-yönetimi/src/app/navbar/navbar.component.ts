import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from '../add-product-diaolog/add-product-diaolog.component';
import { Products, ProductsComponent } from '../products/products.component'
import { response } from 'express';
import { log } from 'console';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class HomeComponent {

  animal: string = "";
  name: string = "";
  AddopenDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  categories: categories[] | any = []
  constructor(private __http: HttpClient, public dialog: MatDialog) {
    this.__http.get("https://fakestoreapi.com/products/categories").subscribe(response => {
      this.categories = response;
    })
  }
  getCategories(category: string) {
    if (category === "electronics") return "Elektronik";
    else if (category === "jewelery") return "Mücevherat"
    else if (category === "men's clothing") return "Erkek Kıyafet"
    else if (category === "women's clothing") return "Kadın Kıyafet"
    else return ""
  }
  @Input() ProductData:Products|any; 
  @Output() setData = new EventEmitter<Products>();

  setAppComponent() {
    this.setData.emit(this.ProductData);    
  }

  getCategory(category: string) {
    const APIURL = `https://fakestoreapi.com/products/category/${category}`;
    this.__http.get(APIURL).subscribe(response => {
      this.ProductData = response;
    });
    this.setAppComponent()
  }
}
export interface categories {
  category: string;
}


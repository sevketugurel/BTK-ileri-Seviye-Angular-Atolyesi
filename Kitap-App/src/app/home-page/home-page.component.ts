import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { MatTableModule } from '@angular/material/table';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { NavbarComponent } from './navbar/navbar.component'
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [MatTableModule, BookCardListComponent, MatButtonModule, NavbarComponent]
})


export class HomePageComponent {
  
  books: BookModel[] = BooksData;
  categories: string[] = []
  cartList:BookModel[] = []
  filteredBooks: BookModel | any = BooksData

  constructor(private _router:Router){}

  ngOnInit() {// NGONINIT İLK ÇALIŞAN KOMUTLARDIR.
    this.books.forEach((item: BookModel) => {
      if (!this.categories.includes(item.category)) {
        this.categories.push(item.category)
      }
    })
  }
  setBooksForCategories(event: string) {
    this.filteredBooks = this.books.filter((data: BookModel) => data.category === event)
  }
  filtretemizleme(event: string) {
    this.filteredBooks = this.books
  }
  SepeteGit() {
    this._router.navigateByUrl("/cart")
  }
  addToCart(event:BookModel){
    this.cartList.push(event)
    console.log(this.cartList);
    
  }
}

export interface BookModel {
  name: string,
  author: string,
  year: string,
  image: string,
  category: string,
  star: string,
  id: string
}



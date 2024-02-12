import { Component } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';
import { BooksData } from '../books.const';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  cartlist:BookModel[]=[]
  ngOnInit(){
    this.cartlist.push(BooksData[0])
    this.cartlist.push(BooksData[1])
    this.cartlist.push(BooksData[4])
    this.cartlist.push(BooksData[7])
  }

}

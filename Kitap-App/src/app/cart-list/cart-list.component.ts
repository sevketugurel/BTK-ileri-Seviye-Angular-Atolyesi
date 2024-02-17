import { Component } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';
import { BooksData } from '../books.const';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  cartlist:BookModel[]=[]
  constructor(private _bookService:BookService){}
  ngOnInit(){
   this.cartlist= this._bookService.getCart()
  }

}

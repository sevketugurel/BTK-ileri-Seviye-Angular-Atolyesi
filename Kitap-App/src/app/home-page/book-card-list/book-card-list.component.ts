import { Component, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { BookModel } from '../home-page.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() bookList:BookModel[] = []; 
  @Output() addCart = new EventEmitter<BookModel>();

  addToCart(book:BookModel){
   this.addCart.emit(book)
  }
}

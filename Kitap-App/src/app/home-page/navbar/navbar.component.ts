import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BooksData } from '../../books.const';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  @Input() categories: string[] = []
  @Output() categoryName = new EventEmitter<string>()
  @Output() categoryTemizle= new EventEmitter<string>()
  FiltreTemizleme() {
    this.categoryTemizle.emit()
  }
  getCategoryFilm(event: string) {
    this.categoryName.emit(event)
  }
}

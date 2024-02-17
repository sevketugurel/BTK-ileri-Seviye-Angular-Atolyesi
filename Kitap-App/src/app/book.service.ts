import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookModel } from './home-page/home-page.component';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  subject = new Subject<BookModel[]>();
  constructor() { }

  addCart(book:BookModel[]){
    // const previousValue = this.getCart(); // daha önceki verileri kaybolmaması için aldık
    // const obj = {...previousValue,book} // birleştirme işlemi
    const payload = JSON.stringify(book) // localstorageda mutlaka string olarak tutulması gerekiyor
    localStorage.setItem("cart",payload)
  }

  getCart(){
    const response = localStorage.getItem("cart")
    if(response){
      return JSON.parse(response)
    }else{
      return {}
    }
    
  }
}

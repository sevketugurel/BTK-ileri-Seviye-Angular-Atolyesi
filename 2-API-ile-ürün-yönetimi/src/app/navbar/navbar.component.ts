import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class HomeComponent {
  categories:categories[] | any=[]
  constructor(private __http: HttpClient,public dialog: MatDialog) {
    this.__http.get("https://fakestoreapi.com/products/categories").subscribe(response=>{
      this.categories=response;
    })
  }
  getCategories(category:string){
    if(category==="electronics") return "Elektronik";
    else if(category==="jewelery") return "Mücevherat"
    else if(category==="men's clothing") return "Erkek Kıyafet"
    else if(category==="women's clothing") return "Kadın Kıyafet"
    else return ""
  }
}
export interface categories{
  category:string;
}

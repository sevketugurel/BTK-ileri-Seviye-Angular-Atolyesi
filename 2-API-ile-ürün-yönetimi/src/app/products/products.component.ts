import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfoDetailComponent } from '../info-detail/info-detail.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  deleteProduct(productId: number) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    this._http.delete(apiUrl)
      .subscribe(
        (response) => {
          alert("Ürün Silindi!")
          console.log('Ürün silindi ', response);
        },
        (error) => {
          console.error('hata var!', error);
        }
      );

  }

  constructor(private _http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getProduct()
  }

  products: Products[] | any = []
  getProduct() {
    this._http.get("https://fakestoreapi.com/products").subscribe(response => {
      this.products = response
      console.log(this.setedProductFromApp);
    })
  }
  openDialog(product: Products) {
    this.dialog.open(InfoDetailComponent, {
      data: product,
      autoFocus: false,
    })
  }

  @Input() setedProductFromApp: Products;


}
export interface Products {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

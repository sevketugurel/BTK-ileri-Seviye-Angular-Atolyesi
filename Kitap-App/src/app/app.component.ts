import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartListComponent } from "./cart-list/cart-list.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomePageComponent, CartListComponent]
})
export class AppComponent {
  title = 'kitap-app';
}

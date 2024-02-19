import { Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginComponent } from './login/LoginComponent';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"home",component:HomePageComponent},
  {path:"register", component:RegisterPageComponent}
];

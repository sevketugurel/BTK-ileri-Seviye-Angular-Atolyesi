import { Routes } from '@angular/router';
import { HomwPageComponent } from './homw-page/homw-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  {path:"", component:HomwPageComponent},
  {path:"home", component:HomwPageComponent},
  {path:"register", component:RegisterPageComponent}
];

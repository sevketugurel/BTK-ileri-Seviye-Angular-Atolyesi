
import { Component,} from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homw-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './homw-page.component.html',
  styleUrl: './homw-page.component.scss'
})
export class HomwPageComponent {
  constructor(private _router:Router){}
  goToRegisterpage() {
    this._router.navigateByUrl("/register")
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(7)]);

  isDisable(): boolean {
    console.log();
    return !(this.emailFormControl.valid && this.passwordFormControl.valid)

  }
}


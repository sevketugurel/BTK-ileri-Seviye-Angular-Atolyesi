import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatCardModule,MatInputModule,MatIconModule,FormsModule,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  newtask:string="";
  tasks:string[]=[];
  yeniTask:string =""

  index:number =0;

  addTask(){
    if(this.newtask != ""){
      this.tasks.push(this.newtask);
      this.newtask="";
    }
  }
  editTask(index:number){
    let yeniTask = prompt("Lütfen değiştirmek istediğinizi giriniz")
    if(yeniTask != null){this.tasks[index] = yeniTask;}
  }

  deleteTask(){
    this.tasks.splice(this.index,1)
  }

}







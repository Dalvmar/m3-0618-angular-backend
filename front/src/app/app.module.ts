import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '../../node_modules/@angular/http';
import { TodosService } from '../services/todos.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

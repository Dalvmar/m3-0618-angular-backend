import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todosLists = [];
  constructor(public todosService:TodosService) {
    todosService.getTodos().subscribe(todos => this.todosLists = todos);
  }
}

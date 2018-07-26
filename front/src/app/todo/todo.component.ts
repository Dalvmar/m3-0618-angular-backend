import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;
  @Input() done: boolean;

  constructor(public todoService:TodosService) { }

  ngOnInit() {
  }

  toggleTodo(){
    this.done = ! this.done;
    console.log(`Marktodo ${this.id} as ${ this.done ? 'done':'not-done'}`);
    this.todoService.markTodo(this.id, this.done).subscribe();
  }
}

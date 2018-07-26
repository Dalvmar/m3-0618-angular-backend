import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() title: string;
  @Input() todos: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}

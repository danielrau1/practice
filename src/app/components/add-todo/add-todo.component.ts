import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
@Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    const todo = {
      id: 5,
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }


}

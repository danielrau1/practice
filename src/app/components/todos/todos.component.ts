import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos(); // DR: here get the actual data which in this case is in the Service

  }
  deleteTodo(todo: Todo) {
    // console.log('delete message');
    this.todos = this.todos.filter(t => t.id !== todo.id); // Return all the todos that don't have the id, so it gets deleted
  }

  addTodo(todo: Todo) {
    this.todos = this.todos.push(todo);

  }

}

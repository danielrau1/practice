import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

// DR: So the data is in the Service!!!
    getTodos() {
      return [
        {
          id: 1,
          title: 'Todo1',
          completed: false
        },
        {
          id: 2,
          title: 'Todo2',
          completed: true
        },
        {
          id: 3,
          title: 'Todo3',
          completed: false
        }
      ];

    }


}

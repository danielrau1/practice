import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/Person';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: Person[];



  constructor() { }

  ngOnInit() {
    this.persons = [{name: 'Daniel Rau', age: 32}, {name: 'Bratok', age: 70}];
  }

}

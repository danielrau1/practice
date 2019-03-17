import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // h1Style = false; // when the page loads won't attach class to it, only when click
users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
    });
  }
/*
  firstClick() {
  // this.h1Style = true;
    this.data.firstClick();
  }
*/

}

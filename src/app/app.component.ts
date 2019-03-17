import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Daniel';

  constructor(){
    //document.write('123a');
    //this.name="Ted";
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bdate = new Date(2017, 11, 0);
  name = 'khOa Pham';
  age = Promise.resolve(10);
  car = { price: 1000, color: 'red' };
}

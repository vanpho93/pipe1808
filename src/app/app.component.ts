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
  users = [
    { name: 'Ti', age: 30, height: 150 },
    { name: 'Teo', age: 20, height: 140 },
    { name: 'Tun', age: 25, height: 160 },
  ];
  sortProp = 'age';
  setSortProps(newSortProp) {
    this.sortProp = newSortProp;
  }
}

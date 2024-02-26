import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  oddClassStyles = {
    'color': 'red',
    'font-weight': 'bold',
    'background-color': 'lightblue'
  };
}

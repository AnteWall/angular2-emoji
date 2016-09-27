import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testModel: string;
  enterTest() {
    console.log('test');
    this.testModel = '';
  }
}

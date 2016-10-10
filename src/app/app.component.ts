import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testModel: string;
  pressedCount: number = 0;
  enterTest() {
    this.pressedCount = this.pressedCount + 1;
    this.testModel = '';
  }
}

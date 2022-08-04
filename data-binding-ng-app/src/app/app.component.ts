import { Component } from '@angular/core';
import { peopleRecords } from 'src/repository/peopleRecords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  marginValue = 30
  welcomeMessage = 'Welcome to data binding'
  numbers = []
  people = peopleRecords

  // increaseMargin(e: any, value: string): void { console.log(e)}
  increaseMargin(value: string): void {
    this.marginValue += Number(value)
  }
}

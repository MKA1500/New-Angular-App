import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputs-outputs-event-emitters';

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
  }
}
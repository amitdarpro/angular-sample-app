import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean = true;
  numOfItems: number = 0;

  onSuccess(len: number) {
    console.log("PARENT onSuccess()");
    this.isLoading = false;
    this.numOfItems += len;
  }
}

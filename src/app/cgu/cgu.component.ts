import { Component } from '@angular/core';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.css']
})
export class CguComponent {
  currentDate: string;

  constructor() {
    this.currentDate = new Date().toLocaleDateString();
  }

}

import { Component } from '@angular/core';
import { Cook } from '../model/cook/cook';

@Component({
  selector: 'app-cook-square',
  templateUrl: './cook-square.component.html',
  styleUrls: ['./cook-square.component.css']
})
export class CookSquareComponent {
  sampleCook: Cook;
  
  constructor() {
    this.sampleCook = new Cook();
    this.sampleCook.firstName = 'Bob';
    this.sampleCook.lastName = 'Adams';
    this.sampleCook.address = 'N/A';
    this.sampleCook.description = 'I am a passionate baker and love sharing my love for food and cooking with others.';
    this.sampleCook.pincode = 602105;
    this.sampleCook.rating = 5.0;
  }
  
}

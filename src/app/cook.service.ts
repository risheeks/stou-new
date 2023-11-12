import { Injectable } from '@angular/core';
import * as sampleCook1 from '../assets/test-data/cook1.json';
import { Cook } from './model/cook/cook';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  constructor() { }

  getCook = (username: string): Cook => {
    return sampleCook1 as Cook;
  }

  getPassword = (username: string): string | undefined => {
    let cook: Cook = sampleCook1 as Cook;
    return cook.password;
  }

}

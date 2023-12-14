import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  apiurl='http://localhost:3000/foods';
  constructor(private http:HttpClient) { }

  addFood(food: any) {
    return this.http.post(this.apiurl,food);
  }

  getFoodsByCook(cook: String): any {
    // console.log(this.apiurl + '?cook=' + cook);
    // console.log(this.http.get(this.apiurl + '?cook=' + cook));
    return this.http.get(this.apiurl + '?cook=' + cook);
  }

}

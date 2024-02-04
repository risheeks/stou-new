import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  apiurl='http://localhost:8080/food';
  constructor(private http:HttpClient) { }

  addFood(food: any) {
    console.log(food);
    return this.http.post(this.apiurl,food);
  }

  getFoodsByCook(cookEmail: String): any {
    return this.http.get(this.apiurl + "/email/" + cookEmail);
  }

  updateFood(food: Food): Observable<Food> {
    return this.http.put(this.apiurl, food);
  }

}

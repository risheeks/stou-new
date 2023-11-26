import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cook } from '../model/cook/cook';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  apiurl='http://localhost:3000/cooks';
  constructor(private http:HttpClient) { 

  }

  // getCook = (username: string): Cook => {
  //   return sampleCook1 as Cook;
  // }

  // getPassword = (username: string): string | undefined => {
  //   let cook: Cook = sampleCook1 as Cook;
  //   return cook.password;
  // }

  registerUser(cook: any) {

    return this.http.post(this.apiurl,cook)
  }

  getCookByUsername (username: String): Observable<any> {
    return this.http.get(this.apiurl + '?username=' + username);
    //return of(new Cook());
  }

  isLoggedIn() {
    return sessionStorage.getItem('cook')!=null;
  }

}

import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cook } from '../model/cook/cook';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  apiurl='http://localhost:3000/cooks';
  @Output() getIsLoggedIn: EventEmitter<any> = new EventEmitter();
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

  login(cook: any): Boolean {
    if(sessionStorage.getItem('cook')!=null) {
      return false;
    } else {
      sessionStorage.setItem('cook', cook);
      this.getIsLoggedIn.emit(true);
      return true;
    }
  }

  logout(): Boolean {
    if(sessionStorage.getItem('cook')==null) {
      return false;
    }
    else {
      sessionStorage.clear();
      this.getIsLoggedIn.emit(false);
      return true;
    }
  }

  isLoggedIn():any {
    return sessionStorage.getItem('cook')!=null;
  }

}

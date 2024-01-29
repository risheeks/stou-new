import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cook } from '../model/cook/cook';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  apiurl='http://localhost:8080/user';
  @Output() getIsLoggedIn: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { 

  }

  registerUser(cook: any) {
    console.log(cook);
    cook.role = {};
    cook.role.roleId = 2;
    return this.http.post(this.apiurl,cook)
  }

  getCookByUsername (username: String): Observable<any> {
    // return this.http.get(this.apiurl + '?username=' + username);
    return this.http.get(this.apiurl + '/' + username + '/2');
  }

  authenticateLogin (cook: any): any {
    // return this.http.get(this.apiurl + '?username=' + username);
    cook.email = cook.username;
    cook.role = {};
    cook.role.roleId = 2;
    cook.aboutMe = "lolz";
    cook.address = "lolz address";
    console.log(cook);
    return this.http.post(this.apiurl + '/authenticate', cook);
  }

  login(cook: any): Boolean {
    if(sessionStorage.getItem('cook')!=null) {
      return false;
    } else {
      // console.log(cook);
      sessionStorage.setItem('cook', JSON.stringify(cook));
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
    // console.log(sessionStorage.getItem('cook'));
    return sessionStorage.getItem('cook')!=null;
  }

  getLoggedInCook(): Cook|any {
    if (sessionStorage.getItem('cook'))
      return JSON.parse(sessionStorage.getItem('cook') || "");
    else 
      return "";
  }

}

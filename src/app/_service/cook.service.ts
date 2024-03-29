import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cook, Role } from '../model/cook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  apiurl='http://localhost:8080/user';
  @Output() getIsLoggedIn: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { 

  }

  registerUser(cook: any) {
    cook.role = new Role();
    cook.banned = false;
    cook.numRatings = 0;
    cook.numViews = 0;
    cook.rating = 0;
    return this.http.post(this.apiurl,cook)
  }

  // uploadImage(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   return this.http.post(this.apiurl+'/image', formData);
  // }

  getCookByUsername (email: String): Observable<Cook> {
    return this.http.get(this.apiurl + '/' + email + '/2');
  }

  authenticateLogin (cook: any): Observable<Boolean> {
    cook.role = new Role();
    return this.http.post<Boolean>(this.apiurl + '/authenticate', cook);
  }

  login(cook: Cook): Boolean {
    if(sessionStorage.getItem('cook')!=null) {
      return false;
    } else {
      sessionStorage.setItem('cook', JSON.stringify(cook));
      console.log("sessionStorage added:");
      console.log(cook);
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

  isLoggedIn(): Boolean {
    return sessionStorage.getItem('cook')!=null;
  }

  getLoggedInCook(): Cook {
      return JSON.parse(sessionStorage.getItem('cook') || "");
  }

}

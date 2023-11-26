import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CookService } from '../service/cook.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn?: boolean;

  constructor(private cookService: CookService) {
    this.loggedIn = false;
  }

  ngOnInit() {
    this.cookService.getIsLoggedIn.subscribe(isLoggedIn => 
      this.loggedIn = isLoggedIn
    )
  }
  
}

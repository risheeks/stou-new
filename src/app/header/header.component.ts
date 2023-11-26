import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn?: boolean;

  constructor(public dialog: MatDialog) {
    this.loggedIn = false;
  }

  
}

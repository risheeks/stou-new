import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CookService } from '../service/cook.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedIn?: boolean;

  constructor(private cookService: CookService, private router: Router, private toastr: ToastrService) {
    this.loggedIn = false;
  }

  ngOnInit() {
    this.cookService.getIsLoggedIn.subscribe(isLoggedIn => 
      this.loggedIn = isLoggedIn
    )
  }

  logout() {
    if(this.cookService.logout()) {
      this.router.navigate([""]);
      this.toastr.success("logged out");
    }

  }
  
}

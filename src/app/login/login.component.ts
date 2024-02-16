import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cook } from '../model/cook';
import { ToastrService } from 'ngx-toastr';
import { CookService } from '../_service/cook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!: FormGroup;
  cook?: Cook;

  constructor(private toastr: ToastrService, private cookService: CookService, private router: Router) {
    sessionStorage.clear();
  }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {

    if(this.login.valid) {
      this.cookService.authenticateLogin(this.login.value).subscribe((validLogin: Boolean) => {
        if(validLogin) {
          let cook = this.cookService.getCookByUsername(this.login.value.email).subscribe(cook => {
            this.cookService.login(cook);
            this.router.navigate(['dashboard']);
          });
        } else {
          this.toastr.error('Invalid Credentials');
        }
      })
    } else {
      this.toastr.error('Invalid Form');
    }
  }
}

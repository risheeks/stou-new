import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cook } from '../model/cook/cook';
import { ToastrService } from 'ngx-toastr';
import { CookService } from '../service/cook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!: FormGroup;
  cook: any;

  constructor(private toastr: ToastrService, private cookService: CookService, private router: Router) {
    sessionStorage.clear();
  }

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {

    if(this.login.valid) {
      this.cookService.authenticateLogin(this.login.value).subscribe((validLogin: boolean) => {
        if(validLogin) {
          this.cookService.login(this.cookService.getCookByUsername(this.login.value.username));
          this.router.navigate(['dashboard']);
        } else {
          this.toastr.error('Invalid Credentials');
        }
      })
    } else {
      this.toastr.error('Invalid Form');
    }
    // console.log('Valid?', this.login.valid); // true or false
    // console.log('Username', this.login.value.username);
    // console.log('Password', this.login.value.password);
  }
}

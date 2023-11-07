import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cook } from '../model/cook/cook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!: FormGroup;
  cook: Cook = new Cook();

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl(this.cook.username, Validators.required),
      password: new FormControl(this.cook.password, Validators.required)
    });
  }

  onSubmit(form: FormGroup) {

    if(!this.login.valid) {
      alert('Please enter BOTH username and password');
      return;
    }
    alert('Logged In\nUser: ' + this.login.value.username);
    this.login.reset();
    // console.log('Valid?', this.login.valid); // true or false
    // console.log('Username', this.login.value.username);
    // console.log('Password', this.login.value.password);
  }
}

import { Component } from '@angular/core';
import { Cook } from '../model/cook/cook';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  repeatPassword?: string;

  onSubmit = (cook: Cook) => {
    alert('submitted');
    console.log(cook);
    return cook;
  };

  canSubmit = (value: Cook): boolean => {
    if (
      value.firstName &&
      value.lastName &&
      value.email &&
      value.password &&
      value.phone &&
      value.pincode &&
      value.username &&
      this.repeatPassword
    ) {
      return true;
    }
    return false;
  };

  canEnableSubmit = (cook: Cook): boolean => {
    if (this.canSubmit(cook) && cook.password == this.repeatPassword) {
      return true;
    }
    return false;
  }
}

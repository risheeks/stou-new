import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { CookService } from '../service/cook.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Cook } from '../model/cook/cook';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  
  constructor(private cookService: CookService, private toastr: ToastrService, private router: Router, private builder: FormBuilder) { }

  register = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    aboutMe: this.builder.control(''),
    picture: this.builder.control(''),
    address: this.builder.control(''),
    rating: this.builder.control(''),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required])),
    specialty: this.builder.array([]),
    status: this.builder.control(0),
    orderHistory: this.builder.array([])
  });

  onSubmit = () => {
    let cook: Cook = this.register.value as Cook;
    if (this.register.valid) {
      this.cookService.registerUser(cook).subscribe(() => {
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  };
}

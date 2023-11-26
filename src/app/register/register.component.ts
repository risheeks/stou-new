import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

import { Cook } from '../model/cook/cook';
import { CookService } from '../service/cook.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  
  

  constructor(private cookService: CookService, private toastr: ToastrService, private router: Router, private builder: FormBuilder) { }

  register = this.builder.group({
    username: this.builder.control('', Validators.required),
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    description: this.builder.control(''),
    image: this.builder.control(''),
    address: this.builder.control(''),
    pincode: this.builder.control('', Validators.required),
    rating: this.builder.control(''),
    phone: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required])),
    specialty: this.builder.array([]),
    status: this.builder.control(0),
    orderHistory: this.builder.array([])
  })

  onSubmit = () => {
    if (this.register.valid) {
      this.cookService.registerUser(this.register.value).subscribe(result => {
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  };
}

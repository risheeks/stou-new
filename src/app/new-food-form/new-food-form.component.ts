import { Component } from '@angular/core';
import { CookService } from '../service/cook.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FoodService } from '../service/food.service';
import { Cook } from '../model/cook/cook';
import { Food } from '../model/food/food';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent {

  constructor(private foodService: FoodService, private cookService: CookService, private toastr: ToastrService, private router: Router, private builder: FormBuilder) { }

  newFood = this.builder.group({
    picture: this.builder.control(''),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    price: this.builder.control('', Validators.required),
    calories: this.builder.control(''),
    cuisine: this.builder.control(''),
    valid: this.builder.control(true)
  });

  onSubmit = () => {
    if (this.newFood.valid) {
      let food: Food = this.newFood.value as Food;
      food.cookEmail = this.cookService.getLoggedInCook().email;
      this.foodService.addFood(food).subscribe(result => {
        this.router.navigate(['dashboard'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  };
}

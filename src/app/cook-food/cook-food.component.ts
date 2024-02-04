import { Component, Input } from '@angular/core';
import { CookService } from '../service/cook.service';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food/food';
import {
  coerceBooleanProperty,
  BooleanInput
} from '@angular/cdk/coercion';

@Component({
  selector: 'app-cook-food',
  templateUrl: './cook-food.component.html',
  styleUrls: ['./cook-food.component.css']
})
export class CookFoodComponent {

  @Input() food!: Food;
  
  constructor(private cookService: CookService, private foodService: FoodService, private toastr: ToastrService) {}

  ngOnInit() {
    console.log(this.food);
  }

  getActive(): BooleanInput{
    if(this.food.valid) return coerceBooleanProperty(this.food.valid);
    return false;
  }

  toggleActive(active: boolean) {
    this.food.valid = active;
    this.foodService.updateFood(this.food).subscribe(food => {
      this.toastr.success(this.food.title, "valid: " + this.food.valid);
    });
  }

}

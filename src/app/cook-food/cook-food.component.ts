import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookService } from '../_service/cook.service';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from '../_service/food.service';
import { Food } from '../model/food';
import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-cook-food',
  templateUrl: './cook-food.component.html',
  styleUrls: ['./cook-food.component.css']
})
export class CookFoodComponent {

  @Input() food!: Food;
  @Output() reloadFoods: EventEmitter<void> = new EventEmitter();
  
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
      this.food = food;
      this.toastr.success(this.food.title, "valid: " + this.food.valid);
    });
  }

  deleteFood(): void {
    this.foodService.deleteFood(this.food, this.reloadFoods);
    console.log("This should be AFTER the service log");
    // this.reloadFoods.emit();
    
  }

}
 
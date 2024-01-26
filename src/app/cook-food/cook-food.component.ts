import { Component, Input } from '@angular/core';
import { CookService } from '../service/cook.service';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from '../service/food.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-cook-food',
  templateUrl: './cook-food.component.html',
  styleUrls: ['./cook-food.component.css']
})
export class CookFoodComponent {
  @Input() food: any;
  
  constructor(private cookService: CookService, private foodService: FoodService, private toastr: ToastrService) {}

  ngOnInit() {
    // console.log(this.food);
  }

}

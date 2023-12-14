import { Component } from '@angular/core';
import { CookService } from '../service/cook.service';
import { FoodService } from '../service/food.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cook-food-list',
  templateUrl: './cook-food-list.component.html',
  styleUrls: ['./cook-food-list.component.css']
})
export class CookFoodListComponent {
  foodList: any;

  constructor(private cookService: CookService, private foodService: FoodService, private toastr: ToastrService) {}

  ngOnInit() {
    let cook: String = this.cookService.getLoggedInCook().username;
    this.foodService.getFoodsByCook(cook).subscribe((foodsList: any)=> {
      this.foodList = foodsList;
      // console.log(this.foodList);
    })
  }
}

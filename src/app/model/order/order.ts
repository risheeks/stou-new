import { Time } from "@angular/common";
import { Food } from "../food/food";

export class Order {
    orderId?: string;
    customerId?: string;
    cookId?: string;
    listOfItems?: Food[];
    Time?: Time;
    Info?: string;  //customer facing
    notes?: string; //for Stou purposes only
}

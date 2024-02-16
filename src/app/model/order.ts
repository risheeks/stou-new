import { Time } from "@angular/common";
import { Food } from "./food";

export class Order {
    orderId?: string;
    customerId?: string;
    cookId?: string;
    listOfItems?: Food[];
    time?: Time;
    info?: string;  //customer facing
    notes?: string; //for Stou purposes only
}

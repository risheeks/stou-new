import { Time } from "@angular/common";
import { Item } from "../item/item";

export class Order {
    orderId?: string;
    customerId?: string;
    cookId?: string;
    listOfItems?: Item[];
    Time?: Time;
    Info?: string;  //customer facing
    notes?: string; //for Stou purposes only
}

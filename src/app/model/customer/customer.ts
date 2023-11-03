import { Item } from "../item/item";
import { Order } from "../order/order";

export class Customer {
    customerId?: string;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    orderHistory?: Order[];
    favourites?: Item[];
    rating?: number;
}

import { Item } from "../item/item";
import { Order } from "../order/order";

export class Customer {
    customerId?: string;
    email?: string;
    phone?: number;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    orderHistory?: Order[];
    favourites?: Item[];
    rating?: number;
}

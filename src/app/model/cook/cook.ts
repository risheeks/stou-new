import { Item } from "../item/item";
import { Order } from "../order/order";

export class Cook {
    cookId?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    address?: string;
    pincode?: number;
    rating?: number;
    phone?: number;
    email?: string;
    username?: string;
    password?: string;
    specialty?: Item[];
    status?: number;
    orderHistory?: Order[];
}

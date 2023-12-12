import { Food } from "../item/item";
import { Order } from "../order/order";

export class Cook {
    username?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    image?: string;
    address?: string;
    pincode?: number;
    rating?: number;
    phone?: string;
    email?: string;
    password?: string;
    specialty?: Food[];
    status?: number;
    orderHistory?: Order[];
}

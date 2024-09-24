import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/category-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { ordersReducer } from "./order/order-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

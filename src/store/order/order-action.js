import { createAction } from "../../utils/reducer/reducer";
import { ORDER_ACTION_TYPES } from "./order-types";

export const addOrderStart = (orderToAdd) =>
  createAction(ORDER_ACTION_TYPES.ADD_ORDER_START, orderToAdd);

export const addOrderSuccess = (orderToAdd) =>
  createAction(ORDER_ACTION_TYPES.ADD_ORDER_SUCCESS, orderToAdd);

export const addOrderFailed = (error) =>
  createAction(ORDER_ACTION_TYPES.ADD_ORDER_FAILED, error);

export const fetchOrdersStart = () =>
  createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_START);

export const fetchOrdersSuccess = (ordersToStore) =>
  createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS, ordersToStore);

export const fetchOrdersFailed = (error) =>
  createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_FAILED, error);

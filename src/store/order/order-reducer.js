import { ORDER_ACTION_TYPES } from "./order-types";

export const ORDER_INITIAL_STATE = {
  orders: [],
  isLoading: false,
  error: null,
};

export const ordersReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload,
      };
    case ORDER_ACTION_TYPES.ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, payload],
      };

    default:
      return state;
  }
};

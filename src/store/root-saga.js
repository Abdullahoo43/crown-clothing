import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./categories/category-saga";
import { userSagas } from "./user/user-saga";
import { orderSagas } from "./order/order-saga";

export function* rootSaga() {
  yield all([call(categoriesSagas), call(userSagas), call(orderSagas)]);
}

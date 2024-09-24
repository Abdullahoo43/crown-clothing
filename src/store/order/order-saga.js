import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  addCollectionAndDocument,
  getCollectionAndDocuments,
} from "../../utils/firebase/firebase";

import {
  addOrderSuccess,
  fetchOrdersFailed,
  fetchOrdersSuccess,
} from "./order-action";

import { ORDER_ACTION_TYPES } from "./order-types";

// adding data in fire store

export function* addOrderAsync({ payload }) {
  try {
    yield call(addCollectionAndDocument, "orders", payload);
    yield put(addOrderSuccess(payload));
  } catch (error) {
    // yield put(addOrderFailed(error));
    console.log("error from saga", error);
  }
}

export function* onAddOrder() {
  yield takeLatest(ORDER_ACTION_TYPES.ADD_ORDER_START, addOrderAsync);
}

// getting data from firestore

export function* fetchOrdersAsync() {
  try {
    const ordersArray = yield call(getCollectionAndDocuments, "orders");
    yield put(fetchOrdersSuccess(ordersArray));
  } catch (error) {
    yield put(fetchOrdersFailed(error));
  }
}

export function* onFetchOrders() {
  yield takeLatest(ORDER_ACTION_TYPES.FETCH_ORDERS_START, fetchOrdersAsync);
}

export function* orderSagas() {
  yield all([call(onAddOrder), call(onFetchOrders)]);
}

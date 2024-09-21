import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  addProductToList,
  getCategoriesAndDocuments,
  removeProductFromList,
} from "../../utils/firebase/firebase";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  addProductSuccess,
  addProductFailed,
  removeProductSuccess,
  removeProductFailed,
} from "./category-action";

import { CATEGORIES_ACTION_TYPES } from "./category-types";

// getting data from firestore
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// adding data in fire store

export function* addProductAsync({ payload: { category, productToAdd } }) {
  try {
    yield call(addProductToList, category, productToAdd);
    yield put(addProductSuccess(category, productToAdd));
  } catch (error) {
    yield put(addProductFailed(error));
  }
}

export function* onAddProduct() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_START, addProductAsync);
}

// removing product from fire store

export function* removeProductAsync({
  payload: { category, productToRemove },
}) {
  try {
    yield call(removeProductFromList, category, productToRemove);
    yield put(removeProductSuccess(category, productToRemove));
  } catch (error) {
    yield put(removeProductFailed(error));
  }
}

export function* onRemoveProduct() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_START,
    removeProductAsync
  );
}

export function* categoriesSaga() {
  yield all([
    call(onFetchCategories),
    call(onAddProduct),
    call(onRemoveProduct),
  ]);
}

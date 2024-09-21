import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category-types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// adding product to fire store actions

export const addProductStart = (category, productToAdd) =>
  createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_START, {
    category,
    productToAdd,
  });

export const addProductSuccess = (category, productToAdd) =>
  createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_SUCCESS, {
    category,
    productToAdd,
  });

export const addProductFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.ADD_PRODUCT_FAILED, error);

// removing product from fire store actions

export const removeProductStart = (category, productToRemove) =>
  createAction(CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_START, {
    category,
    productToRemove,
  });

export const removeProductSuccess = (category, productToRemove) =>
  createAction(CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_SUCCESS, {
    category,
    productToRemove,
  });

export const removeProductFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_FAILED, error);

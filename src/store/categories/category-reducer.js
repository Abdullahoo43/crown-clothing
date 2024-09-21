import { CATEGORIES_ACTION_TYPES } from "./category-types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.ADD_PRODUCT_SUCCESS:
      const addedCategories = [...state.categories];

      addedCategories
        .find((c) => c.title.toLowerCase() === payload.category.toLowerCase())
        .items.push(payload.productToAdd);

      return {
        ...state,
        categories: addedCategories,
      };
    case CATEGORIES_ACTION_TYPES.ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
      };

    case CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_SUCCESS:
      const updatedCategories = [...state.categories];

      const filteredCategory = state.categories
        .find((c) => c.title.toLowerCase() === payload.category.toLowerCase())
        .items.filter((prod) => prod.id !== payload.productToRemove.id);

      updatedCategories.find(
        (c) => c.title.toLowerCase() === payload.category.toLowerCase()
      ).items = filteredCategory;

      return {
        ...state,
        categories: updatedCategories,
      };
    case CATEGORIES_ACTION_TYPES.REMOVE_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

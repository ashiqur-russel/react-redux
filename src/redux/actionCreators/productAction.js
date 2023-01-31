import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_ITEM_BY_ID,
  INCREASE_ITEM_BY_ID,
} from "../actionTypes/actionTypes";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};
export const removeItemFromCart = (data) => {
  return { type: REMOVE_FROM_CART, payload: data };
};
export const increaseItemToCart = (product) => {
  return { type: INCREASE_ITEM_BY_ID, payload: product };
};
export const decreaseItemToCart = (product) => {
  return { type: DECREASE_ITEM_BY_ID, payload: product };
};

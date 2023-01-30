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
export const increaseItemToCart = (id) => {
  return { type: INCREASE_ITEM_BY_ID, payload: id };
};
export const decreaseItemToCart = (id) => {
  return { type: DECREASE_ITEM_BY_ID, payload: id };
};

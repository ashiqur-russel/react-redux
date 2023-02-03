import {
  ADD_TO_CART,
  DECREASE_ITEM_BY_ID,
  INCREASE_ITEM_BY_ID,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  const exisitingProduct = state.cart.find(
    (item) => item._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (exisitingProduct) {
        const newCart = state.cart.filter(
          (item) => item._id !== exisitingProduct._id
        );

        exisitingProduct.quantity = exisitingProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, exisitingProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    case INCREASE_ITEM_BY_ID:
      if (exisitingProduct) {
        exisitingProduct.quantity = exisitingProduct.quantity + 1;
        return { ...state, cart: [...state.cart] };
      }
    case DECREASE_ITEM_BY_ID:
      if (exisitingProduct && exisitingProduct.quantity !== 1) {
        exisitingProduct.quantity = exisitingProduct.quantity - 1;
      }
      return {
        ...state,
        cart: [...state.cart],
      };

    default:
      return state;
  }
};

export default productReducer;

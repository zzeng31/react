import CartContext from "./cartContext";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const removeCartItem = (state, action) => {
  const itemToRemoveIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  let newItems = [...state.items];
  if (itemToRemoveIndex !== -1) {
    newItems[itemToRemoveIndex].amount--;
    if (newItems[itemToRemoveIndex].amount < 1) {
      newItems = newItems.filter((item) => item.id !== action.payload.id);
    }
  }
  return {
    items: newItems,
    totalAmount:
      state.totalAmount + action.payload.totalAmount * action.payload.price,
  };
};
const addCartItem = (state, action) => {
  const existItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  let newItems = [...state.items];
  if (existItemIndex !== -1) {
    newItems[existItemIndex].amount += action.payload.amount;
  } else {
    newItems = [...newItems, action.payload];
  }

  return {
    items: newItems,
    totalAmount:
      state.totalAmount + action.payload.totalAmount * action.payload.price,
  };
};

const cartReduecer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addCartItem(state, action);
    case "REMOVE_ITEM":
      return removeCartItem(state, action);

    default:
      return state;
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReduecer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      payload: {
        id: id,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

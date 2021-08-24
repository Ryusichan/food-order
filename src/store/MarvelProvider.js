import React from "react";

import { useReducer } from "react";

import MarvelContext from "./cart-context";

const ADD = "ADD";
const REMOVE = "REMOVE";

const defaultMarvelState = {
  items: [],
  totalAmount: 0,
};

const marvelReducer = (state, action) => {
  if (action.type === ADD) {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existionMarvelItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingMarvelItem = state.items[existionMarvelItemIndex];

    let updatedItems;

    if (existingMarvelItem) {
      const updatedItem = {
        ...existingMarvelItem,
        amount: existingMarvelItem.amount + action.item.amount,
      };
      updatedItem = [...state.items];
      updatedItems[existingMarvelItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === REMOVE) {
    const existingMarvelItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingMarvelItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      //동일한 아이템에 적용된값 적용
      updatedItems[existingMarvelItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const MarvelProvider = (props) => {
  const [marvelState, dispatchMarbleAction] = useReducer(
    marvelReducer,
    defaultMarvelState
  );

  const addItemToMarvelHandler = (item) => {
    dispatchMarbleAction({ type: ADD, item: item });
  };

  const removeItemFromMarvelHandler = (id) => {
    dispatchMarbleAction({ type: REMOVE, id: id });
  };

  const marvelContext = {
    items: marvelState.items,
    totalAmount: marvelState.totalAmount,
    addItem: addItemToMarvelHandler,
    removeItem: removeItemFromMarvelHandler,
  };

  return (
    <MarvelContext.Provider value={marvelContext}>
      {props.children}
    </MarvelContext.Provider>
  );
};

export default MarvelProvider;

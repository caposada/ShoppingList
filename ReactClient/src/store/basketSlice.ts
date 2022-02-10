import { createSlice } from '@reduxjs/toolkit';
import { insertItem, removeItem, updateItem } from "./utils";
import BasketItem from "@/shared/BasketItem";

const initialBasketItems: Array<BasketItem> = [];
const initialState = {
  basketItems: initialBasketItems,
  count: initialBasketItems.length
};

export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasketItems: (state, action) => {
          state.basketItems = action.payload;
          state.count = action.payload.length;
        },
        addBasketItems: (state, action) => {
          state.basketItems = insertItem(
            state.basketItems, 
            {
              item: action.payload.basketItem as BasketItem,
              index: 0
            }
          );
          state.count = state.basketItems.length;
        },
        removeBasketItem: (state, action) => {
          state.basketItems = removeItem(
            state.basketItems, 
            {
              index: action.payload.index
            }
          );
          state.count = state.basketItems.length;
        },
        updateBasketItem: (state, action) => {     
          state.basketItems = updateItem(
            state.basketItems, 
            { 
              item: action.payload.basketItem as BasketItem,
              index: action.payload.index
            }
          );
        },
        clearBasketItem:  (state, action) => initialState
    }
});

export const { 
  setBasketItems, 
  addBasketItems, 
  removeBasketItem,
  updateBasketItem,
  clearBasketItem 
} = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBasketItems = (state: any) => state.basket.basketItems;
export const selectTotalItemsCount = (state: any) => state.basket.count;

export default slice.reducer;
import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/RootStore';

export const selectItems = (state: RootState) => state.mobileStore.items;

export const selectItemById = (id: string) =>
  createSelector(
    selectItems,
    items => items && items.find(item => item._id === id),
  );

export const selectCart = (state: RootState) => state.mobileStore.cart;

export const selectCartCount = createSelector(selectCart, cart =>
  Object.keys(cart).length > 0
    ? Object.values(cart).reduce((a, c) => a + c)
    : 0,
);

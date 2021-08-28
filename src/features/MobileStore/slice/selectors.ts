import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/RootStore';

export const selectItems = (state: RootState) => state.mobileStore.items;

export const selectItemById = (id: string) =>
  createSelector(
    selectItems,
    items => items && items.find(item => item._id === id),
  );

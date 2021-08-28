import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/RootStore';

const selectMobileStore = (state: RootState) => state.mobileStore;

export const selectItems = createSelector(selectMobileStore, ms => ms.items);

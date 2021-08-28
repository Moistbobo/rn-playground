import {createAsyncThunk, createSlice, isAllOf} from '@reduxjs/toolkit';
import MobileStoreService from 'services/MobileStoreService';
import {ItemType} from 'types/MobileStoreTypes';

export const getItems = createAsyncThunk(
  'mobileStore/GetProducts',
  async () => {
    const response = await MobileStoreService.getItems();

    return {items: response.data.items};
  },
);

type State = {
  items?: ItemType[];

  cart: {[index: string]: number};
};

const initialState: State = {
  cart: {},
};

const slice = createSlice({
  name: 'mobileStore',
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log('got action');
      const {cart} = state;
      const {
        payload: {_id, quantity},
      } = action;

      if (cart[_id]) {
        return {
          ...state,
          cart: {
            ...cart,
            [_id]: cart[_id] + quantity,
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...cart,
            [_id]: quantity,
          },
        };
      }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(isAllOf(getItems.fulfilled), (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

const {reducer, actions} = slice;

export {actions as MobileStoreActions};
export default reducer;

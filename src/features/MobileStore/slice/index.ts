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
};

const initialState: State = {};

const slice = createSlice({
  name: 'mobileStore',
  initialState,
  reducers: {},
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

import {configureStore} from '@reduxjs/toolkit';
import MobileStoreSlice from 'features/MobileStore/slice';
import CreateDebugger from 'redux-flipper';

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(CreateDebugger()),
  reducer: {
    mobileStore: MobileStoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

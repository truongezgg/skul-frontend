import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import global from './global/reducer';

const PERSISTED_KEYS: string[] = ['user'];

const store = configureStore({
  reducer: {
    global,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, immutableCheck: false }).concat(
      save({ states: PERSISTED_KEYS })
    ),
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

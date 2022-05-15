import { updateSync } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export interface IGlobalState {
  isSyncing: boolean;
}

export const initialState: IGlobalState = {
  isSyncing: false,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(updateSync, (state, { payload }) => {
    state.isSyncing = payload;
  })
);

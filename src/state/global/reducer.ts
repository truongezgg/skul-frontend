import { updateSync } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export interface IGlobalState {
  /**Require sync data at first time visit page */
  isSync: boolean;
}

export const initialState: IGlobalState = {
  isSync: false,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(updateSync, (state, { payload }) => {
    state.isSync = payload;
  })
);

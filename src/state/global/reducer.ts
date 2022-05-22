import { updateSync } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { SyncStatus } from 'types/enum';

export interface IGlobalState {
  /**Require sync data at first time visit page */
  sycStatus: SyncStatus;
}

export const initialState: IGlobalState = {
  sycStatus: SyncStatus.NOT_SYNC,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(updateSync, (state, { payload }) => {
    state.sycStatus = payload;
  })
);

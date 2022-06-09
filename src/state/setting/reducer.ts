import { updateBlockEnterPin, updateLanguageSetting, updatePin } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { Language } from 'types/enum';

export interface ISettingState {
  language: Language;
  pin: string;
  blockEnterPinTo?: number;
}

export const initialState: ISettingState = {
  language: Language.ENGLISH,
  pin: '',
  blockEnterPinTo: undefined,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateLanguageSetting, (state, { payload }) => {
      state.language = payload;
    })
    .addCase(updatePin, (state, { payload }) => {
      state.pin = payload;
    })
    .addCase(updateBlockEnterPin, (state, { payload }) => {
      state.blockEnterPinTo = payload;
    })
);

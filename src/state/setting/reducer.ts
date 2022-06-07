import { updateLanguageSetting, updatePin } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { Language } from 'types/enum';

export interface ISettingState {
  language: Language;
  pin: string;
}

export const initialState: ISettingState = {
  language: Language.ENGLISH,
  pin: '',
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateLanguageSetting, (state, { payload }) => {
      state.language = payload;
    })
    .addCase(updatePin, (state, { payload }) => {
      state.pin = payload;
    })
);

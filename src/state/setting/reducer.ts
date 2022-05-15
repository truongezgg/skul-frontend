import { updateLanguageSetting } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { Language } from 'types/enum';

export interface ISettingState {
  language: Language;
}

export const initialState: ISettingState = {
  language: Language.ENGLISH,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(updateLanguageSetting, (state, { payload }) => {
    state.language = payload;
  })
);

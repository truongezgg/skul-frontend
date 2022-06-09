import { createAction } from '@reduxjs/toolkit';
import { Language } from 'types/enum';

export const updateLanguageSetting = createAction<Language>('setting/language-setting');

export const updatePin = createAction<string>('setting/update-pin');
export const updateBlockEnterPin = createAction<number | undefined>('setting/block-enter-pin-to');

import { createAction } from '@reduxjs/toolkit';
import { Language } from 'types/enum';

export const updateLanguageSetting = createAction<Language>('setting/language-setting');

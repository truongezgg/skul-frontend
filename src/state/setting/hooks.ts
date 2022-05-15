import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { Language } from 'types/enum';
import { updateLanguageSetting } from './actions';

export function updateLanguage(): (language: Language) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((language: Language) => dispatch(updateLanguageSetting(language)), [dispatch]);
}

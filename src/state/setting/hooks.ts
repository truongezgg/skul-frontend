import { changeLanguage } from 'i18next';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { Language } from 'types/enum';
import { updateLanguageSetting } from './actions';

export function useUpdateLanguage(): (language: Language) => Promise<void> {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(
    async (language: Language) => {
      await changeLanguage(language);
      dispatch(updateLanguageSetting(language));
    },
    [dispatch]
  );
}

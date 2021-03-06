import { changeLanguage } from 'i18next';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { Language } from 'types/enum';
import { updateBlockEnterPin, updateLanguageSetting, updatePin } from './actions';

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

export function useUpdatePin(): (pin: string) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((pin: string) => dispatch(updatePin(pin)), [dispatch]);
}

export function useUpdateBlockEnterPin(): (time?: number) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((time?: number) => dispatch(updateBlockEnterPin(time)), [dispatch]);
}

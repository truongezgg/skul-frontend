import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { updateSync } from './actions';

export function useUpdateSync(): (isSync: boolean) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((isSync: boolean) => dispatch(updateSync(isSync)), [dispatch]);
}

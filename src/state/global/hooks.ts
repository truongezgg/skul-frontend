import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { updateSync } from './actions';

export function useUpdateSync(): (isSyncing: boolean) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((isSyncing: boolean) => dispatch(updateSync(isSyncing)), [dispatch]);
}

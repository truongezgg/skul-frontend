import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { SyncStatus } from 'types/enum';
import { updateSync } from './actions';

export function useUpdateSync(): (syncStatus: SyncStatus) => void {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback((syncStatus: SyncStatus) => dispatch(updateSync(syncStatus)), [dispatch]);
}

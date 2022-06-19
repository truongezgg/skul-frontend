import { createAction } from '@reduxjs/toolkit';
import { SyncStatus } from 'types/enum';

export const updateSync = createAction<SyncStatus>('global/updateSync');

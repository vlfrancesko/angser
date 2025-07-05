import { createReducer, on } from '@ngrx/store';
import * as SharedActions from './shared.actions';

export interface SharedState {
  isLoading: boolean;
}

export const initialState: SharedState = {
  isLoading: false,
};

export const sharedReducer = createReducer(
  initialState,
  on(SharedActions.setLoadingSpinner, (state, { isLoading }) => ({
    ...state,
    isLoading,
  }))
);

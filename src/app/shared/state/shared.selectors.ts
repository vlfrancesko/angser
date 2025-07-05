import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.reducer';

export const selectSharedState = createFeatureSelector<SharedState>('shared');

export const selectIsLoading = createSelector(
  selectSharedState,
  (state) => state.isLoading
);

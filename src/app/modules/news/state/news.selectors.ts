import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from './news.reducer';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const selectAllNews = createSelector(
  selectNewsState,
  (state) => state.posts
);

export const selectNewsLoading = createSelector(
  selectNewsState,
  (state) => state.loading
);

export const selectNewsError = createSelector(
  selectNewsState,
  (state) => state.error
);

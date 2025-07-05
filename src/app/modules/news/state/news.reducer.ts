import { createReducer, on } from '@ngrx/store';
import * as NewsActions from './news.actions';
import { Post } from './news.model';

export interface NewsState {
  posts: Post[];
  loading: boolean;
  error: any;
}

export const initialState: NewsState = {
  posts: [],
  loading: false,
  error: null,
};

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadNews, (state) => ({ ...state, loading: true })),
  on(NewsActions.loadNewsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(NewsActions.loadNewsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

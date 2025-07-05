import { createAction, props } from '@ngrx/store';
import { Post } from './news.model';

export const loadNews = createAction(
  '[News] Load',
  props<{ limit?: number }>()
);

export const loadNewsSuccess = createAction(
  '[News] Load Success',
  props<{ posts: Post[] }>()
);
export const loadNewsFailure = createAction(
  '[News] Load Failure',
  props<{ error: any }>()
);

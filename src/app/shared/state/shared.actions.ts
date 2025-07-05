import { createAction, props } from '@ngrx/store';

export const setLoadingSpinner = createAction(
  '[UI] Set Loading',
  props<{ isLoading: boolean }>()
);

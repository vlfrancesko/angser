import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../../../services/posts.service';
import * as NewsActions from './news.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { setLoadingSpinner } from '../../../shared/state/shared.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class NewsEffects {
  private actions$ = inject(Actions);
  private newsService = inject(PostsService);
  private store = inject(Store);

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadNews),
      tap(() => this.store.dispatch(setLoadingSpinner({ isLoading: true }))),
      mergeMap((action) => {
        const limit = (action as { limit?: number }).limit;
        return this.newsService.getAllPosts(limit).pipe(
          map((posts) => NewsActions.loadNewsSuccess({ posts })),
          tap(() =>
            this.store.dispatch(setLoadingSpinner({ isLoading: false }))
          ),
          catchError((error) =>
            of(NewsActions.loadNewsFailure({ error })).pipe(
              tap(() =>
                this.store.dispatch(setLoadingSpinner({ isLoading: false }))
              )
            )
          )
        );
      })
    )
  );
}

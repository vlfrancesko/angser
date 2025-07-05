import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NewsActions from './news.actions';
import * as NewsSelectors from './news.selectors';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  news$ = this.store.select(NewsSelectors.selectAllNews);
  loading$ = this.store.select(NewsSelectors.selectNewsLoading);

  constructor(private store: Store) {}

  loadNews(limit?: number) {
    this.store.dispatch(NewsActions.loadNews({ limit }));
  }
}

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { sharedReducer } from './shared/state/shared.reducer';
import { newsReducer } from './modules/news/state/news.reducer';
import { provideEffects } from '@ngrx/effects';
import { NewsEffects } from './modules/news/state/news.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideHttpClient(),
    provideStore({
      shared: sharedReducer,
      news: newsReducer,
    }),
    provideEffects([NewsEffects]),
  ],
};

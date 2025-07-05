import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/post-list/post-list.component').then(
        (m) => m.PostListComponent
      ),
  },
];

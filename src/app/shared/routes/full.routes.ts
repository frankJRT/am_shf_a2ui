import { Routes, RouterModule } from '@angular/router';

export const full: Routes = [
  {
    path: 'error',
    loadChildren: () =>
      import('../../pages/error-pages/error-pages.module').then(
        (m) => m.ErrorPagesModule
      ),
  },
];

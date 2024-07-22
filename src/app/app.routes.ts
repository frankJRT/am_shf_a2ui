import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';

import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';

export const routes: Routes = [
  /*
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full',
  },
  */
  {
    path: 'auth/login',
    component: LoginComponent,
  },

  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AdminGuard],
    children: content,
  },
  /*
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AdminGuard],
    children: full,
  },
  */
  {
    path: '**',
    redirectTo: '',
  },
];

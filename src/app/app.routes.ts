import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';

import { content } from './shared/routes/content-routes';
import { BaseLayoutComponent } from './shared/components/layout/base-layout/base-layout.component';
import { CarterasComponent } from './pages/cat/carteras/carteras.component';
import { contentCartera } from './pages/routes/contentCartera-routes';

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
    component: BaseLayoutComponent,
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

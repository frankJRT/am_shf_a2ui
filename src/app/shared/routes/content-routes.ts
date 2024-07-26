import { Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { contentCartera } from '../../pages/routes/contentCartera-routes';
import { DashboardComponent } from '../components/layout/dashboard/dashboard.component';

export const content: Routes = [
  {
    path: 'cartera',
    //redirectTo: 'cartera/',
    //canActivate: [AdminGuard],
    children: contentCartera,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];

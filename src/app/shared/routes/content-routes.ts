import { Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { contentCartera } from '../../pages/routes/contentCartera-routes';

export const content: Routes = [
  {
    path: 'cartera',
    //redirectTo: 'cartera/',
    canActivate: [AdminGuard],
    children: contentCartera,
  },
];

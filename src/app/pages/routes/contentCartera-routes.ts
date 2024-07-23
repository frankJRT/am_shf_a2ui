import { Routes } from '@angular/router';
import { CarterasComponent } from '../cat/carteras/carteras.component';
import { ListCarteraComponent } from '../cat/carteras/list-cartera/list-cartera.component';
import { ComportamientoComponent } from '../cat/carteras/comportamiento/comportamiento.component';

export const contentCartera: Routes = [
  {
    path: '',
    component: CarterasComponent,
  },
  {
    path: 'listCartera',
    component: ListCarteraComponent,
  },
  {
    path: 'comportamiento',
    component: ComportamientoComponent,
  },
];

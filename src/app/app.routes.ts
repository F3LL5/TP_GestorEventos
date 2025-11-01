import { Routes } from '@angular/router';
import { CrearEvento } from './pages/crear-evento/crear-evento';

export const routes: Routes = [

  { path: 'crearEvento', component: CrearEvento },

  { path: '', pathMatch: 'full', redirectTo: "/crearEvento" },
  { path: '**', redirectTo: "/crearEvento" }
];

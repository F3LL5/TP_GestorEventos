import { Routes } from '@angular/router';
import { GestorEventos } from './pages/gestor-eventos/gestor-eventos';

export const routes: Routes = [

  { path: 'gestionEventos', component: GestorEventos },

  { path: '', pathMatch: 'full', redirectTo: "/gestionEventos" },
  { path: '**', redirectTo: "/gestionEventos" }
];

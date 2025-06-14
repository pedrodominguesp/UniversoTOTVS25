import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'forms',
    loadComponent: () => import('./pages/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent)
  }
];
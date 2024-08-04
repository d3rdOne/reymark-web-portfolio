import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'home',
  loadComponent: () => import('./features/home/home.component').then(a => a.HomeComponent)
},
{
  path: '**',
  redirectTo:'home'
}];

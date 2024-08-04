import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./features/home/home.component').then(a => a.HomeComponent)
},
{
  path:'contact',
  loadComponent: () => import(`./features/contact/contact.component`).then(a => a.ContactComponent)
},
{
  path: '**',
  redirectTo:''
}];

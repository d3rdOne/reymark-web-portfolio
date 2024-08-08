import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'home',
  title: 'Reymark Bacalso',
  loadComponent: () => import('./features/home/home.component').then(a => a.HomeComponent),
  data: {
    animation: 'Home'
  }
},
{
  path:'contact',
  title: 'Contact',
  loadComponent: () => import(`./features/contact/contact.component`).then(a => a.ContactComponent),
},
{
  path: 'projects',
  title: 'Projects',
  loadComponent: () => import(`./features/projects/projects.component`).then(a => a.ProjectsComponent),
  data: {
    animation: 'Projects'
  }
},
{
  path: '**',
  redirectTo:'home'
}];

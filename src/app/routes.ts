import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/posts.routes'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

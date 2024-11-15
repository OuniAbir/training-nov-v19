import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/posts.routes'),
  },
  {
    path: 'post/new',
    loadComponent: () => import('./post/post-form/post-form.component').then(m => m.PostFormComponent),
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./post/post-form/post-form.component').then(m => m.PostFormComponent),
  },
  {
    path: 'author',
    loadChildren: () => import('./author/author.routes'),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.routes'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

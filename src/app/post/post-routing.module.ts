import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {
        path: ':id',
        resolve: {
          post: (route: ActivatedRouteSnapshot) =>
            inject(PostService).getPostById(route.params['id']),
        },
        children: [
          {
            path: '',
            component: PostDetailComponent,
          },
          {
            path: '',
            outlet: 'author',
            component: AuthorComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}

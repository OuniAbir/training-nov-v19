import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthorComponent } from './author/author.component';
import { PostRoutingModule } from './post-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent, AuthorComponent],
  imports: [CommonModule, PostRoutingModule, MatCardModule],
})
export class PostModule {}

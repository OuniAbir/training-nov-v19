import { Component, inject } from '@angular/core';
import { Post, PostService } from '../services/post.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
})
export class PostListComponent {
  private postService = inject(PostService);
  protected posts$ = this.postService.getPosts();

  selectPost(post: Post): void {
    this.postService.selectPost(post);
  }
}

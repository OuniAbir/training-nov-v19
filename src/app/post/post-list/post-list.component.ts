import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,

  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  private postService = inject(PostService);
  protected posts$ = this.postService.getPosts();
}

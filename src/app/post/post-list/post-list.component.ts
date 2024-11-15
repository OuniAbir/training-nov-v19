import { Component, inject } from '@angular/core';
import { Post, PostService } from '../services/post.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { LoggerLevel, LoggerService, provideLogger } from 'lib';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  providers: [provideLogger(LoggerLevel.DEBUG)],
})
export class PostListComponent {
  private postService = inject(PostService);
  protected posts$ = this.postService.getPosts();

  constructor() {
    inject(LoggerService).debug('PostList created');
    inject(LoggerService).error('PostList created');
    inject(LoggerService).warn('PostList created');
    inject(LoggerService).info('PostList created');
  }

  selectPost(post: Post): void {
    this.postService.selectPost(post);
  }
}

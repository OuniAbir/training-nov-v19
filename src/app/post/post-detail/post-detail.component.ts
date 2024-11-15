import { Component, inject, input, SkipSelf } from '@angular/core';
import { Post } from '../services/post.service';
import { LoggerService } from 'lib';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  imports: [NgOptimizedImage],
})
export class PostDetailComponent {
  constructor() {
    inject(LoggerService).debug('PostDetailComponent created');
    inject(LoggerService).error('PostDetailComponent created');
    inject(LoggerService).warn('PostDetailComponent created');
    inject(LoggerService).info('PostDetailComponent created');
  }

  protected post = input.required<Post>();
}

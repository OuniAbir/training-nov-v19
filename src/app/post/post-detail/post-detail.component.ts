import { Component, input, Input } from '@angular/core';
import { Post } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  protected post = input.required<Post>();
}

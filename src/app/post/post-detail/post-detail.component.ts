import { Component, Input } from '@angular/core';
import { Post } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: false,

  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  @Input({ required: true })
  protected post?: Post;
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../post/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink],
})
export class HeaderComponent {
  protected selectedAuthors = inject(PostService).selectedAuthors;
  protected selectedPosts = inject(PostService).selectedPosts;
}

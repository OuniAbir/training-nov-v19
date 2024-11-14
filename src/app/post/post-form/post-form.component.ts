import { Component, inject, input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post, PostService } from '../services/post.service';
import { AuthorService } from '../services/author.service';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent implements OnInit {
  protected authorList$ = inject(AuthorService).getAuthorList();
  private postService = inject(PostService);
  public id = input<number>();

  ngOnInit(): void {
    if (!this.id()) return;

    this.postService
      .getPostById(this.id()!)
      .pipe(take(1))
      .subscribe((post) => {
        this.formGroup.patchValue(post);
      });
  }

  protected formGroup = new FormGroup({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    content: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    photo: new FormControl<string>('', {
      nonNullable: true,
    }),
    author: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.min(1)],
    }),
  });

  protected savePost(): void {
    if (this.formGroup.invalid) return;

    const post: Post = this.formGroup.getRawValue();
    console.log(post);
  }
}

import { Component, OnInit, inject, input } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressInputComponent } from 'lib';
import { take } from 'rxjs';
import {
  Author,
  Address,
  AuthorService,
} from '../../post/services/author.service';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddressInputComponent],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css',
})
export class AuthorFormComponent implements OnInit {
  private authorService = inject(AuthorService);
  public id = input<number>();

  protected formGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    photo: new FormControl<string>('', {
      nonNullable: true,
    }),
    pseudo: new FormArray<FormControl<string>>([]),
    address: new FormControl<Address | null>(null),
  });

  ngOnInit(): void {
    if (!this.id()) return;

    this.authorService
      .getAuthorById(this.id()!)
      .pipe(take(1))
      .subscribe((author) => {
        author.pseudo.forEach(() => this.addPseudo());
        this.formGroup.patchValue(author);
      });
  }

  protected saveAuthor(): void {
    if (this.formGroup.invalid) return;

    const author: Author = this.formGroup.getRawValue();
    console.log(author);
    // if (this.id()) {
    //   this.authorService.update(this.id()!, author).pipe(take(1)).subscribe();
    //   return;
    // }
    // this.authorService.create(author).pipe(take(1)).subscribe();
  }

  protected addPseudo(): void {
    this.formGroup.controls.pseudo.push(
      new FormControl<string>('', { nonNullable: true })
    );
  }

  protected deletePseudo(index: number): void {
    this.formGroup.controls.pseudo.removeAt(index);
  }
}

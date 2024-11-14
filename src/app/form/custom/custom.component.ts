import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from 'lib';

@Component({
  selector: 'app-custom',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  protected formGroup = new FormGroup({
    formControl: new FormControl<string | null>(null),
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}

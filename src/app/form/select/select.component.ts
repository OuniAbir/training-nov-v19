import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoFilterDropDownComponent } from 'lib';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule, AutoFilterDropDownComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  protected categories = [
    'angular',
    'react',
    'vuejs',
    'svelte',
    'elm',
    'other',
  ];

  public formGroup = new FormGroup({
    category: new FormControl(),
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}

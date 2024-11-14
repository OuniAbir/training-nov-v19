import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address, AddressInputComponent } from 'lib';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, AddressInputComponent],
  templateUrl: './address.component.html',
})
export class AddressComponent {
  protected formGroup = new FormGroup({
    address: new FormControl<Address | null>(null),
  });

  submit(): void {
    console.log('val', this.formGroup.value);
    console.log('valid', this.formGroup.valid);
    console.log('errors', this.formGroup.controls.address.errors);
  }
}

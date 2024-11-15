import { Component, effect, inject } from '@angular/core';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { DEFAULT_TIMER, TOAST_DATA } from '../toaster.service';
import { NgTemplateOutlet } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'lib-toaster',
  standalone: true,
  imports: [NgTemplateOutlet, MatCard],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
})
export class ToasterComponent {
  data = inject(TOAST_DATA);
  timer = toSignal(interval(DEFAULT_TIMER));
  overlay = inject(OverlayRef);

  constructor() {
    effect(() => {
      if (this.timer() === 0) this.overlay.dispose();
    });
  }
}

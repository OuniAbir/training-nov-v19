import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'lib-tpl-card-list',
  imports: [NgTemplateOutlet, MatCard],
  templateUrl: './tpl-card-list.component.html',
  styleUrl: './tpl-card-list.component.css',
})
export class TplCardListComponent<T> {
  list = input.required<T[]>();

  rowTemplate = contentChild('rowRef', { read: TemplateRef });
}

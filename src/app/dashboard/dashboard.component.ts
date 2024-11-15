import { Component, inject } from '@angular/core';
import { LoggerService, ToasterService } from 'lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private toastService = inject(ToasterService);

  constructor() {
    inject(LoggerService).debug('Dashboard created');
    inject(LoggerService).error('Dashboard created');
    inject(LoggerService).warn('Dashboard created');
    inject(LoggerService).info('Dashboard created');
  }

  protected openToaster(): void {
    this.toastService.show({
      text: "Affichage d'un texte",
    });
  }
}

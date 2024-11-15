import { Component, inject } from '@angular/core';
import { LoggerService } from 'lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor() {
    inject(LoggerService).debug('Dashboard created');
    inject(LoggerService).error('Dashboard created');
    inject(LoggerService).warn('Dashboard created');
    inject(LoggerService).info('Dashboard created');
  }
}

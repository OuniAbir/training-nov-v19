/// <reference types="@angular/localize" />

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/routes';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideLogger } from 'lib';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideExperimentalZonelessChangeDetection(),
    provideLogger(),
  ],
}).catch((err) => console.error(err));

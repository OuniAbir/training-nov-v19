/// <reference types="@angular/localize" />

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
  ],
}).catch((err) => console.error(err));

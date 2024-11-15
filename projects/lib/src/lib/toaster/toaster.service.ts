import { Injectable, InjectionToken, Injector, TemplateRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToasterComponent } from './toaster/toaster.component';

export interface ToastData {
  text?: string;
  tpl?: TemplateRef<any>;
}

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');

export const DEFAULT_TIMER = 5000;

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private overlay: Overlay, private parentInjector: Injector) {}

  show(data: ToastData): void {
    const overlayRef = this.overlay.create();

    const injector = this.getInjector(data, overlayRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToasterComponent, null, injector);
    overlayRef.attach(toastPortal);
  }

  private getInjector(
    data: ToastData,
    overlayRef: OverlayRef,
    parentInjector: Injector
  ) {
    return Injector.create({
      providers: [
        {
          provide: TOAST_DATA,
          useValue: data,
        },
        {
          provide: OverlayRef,
          useValue: overlayRef,
        }
      ],
      parent: parentInjector,
    });
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCardComponent } from './tpl-card.component';

describe('TplCardComponent', () => {
  let component: TplCardComponent;
  let fixture: ComponentFixture<TplCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCardListComponent } from './tpl-card-list.component';

describe('TplCardListComponent', () => {
  let component: TplCardListComponent;
  let fixture: ComponentFixture<TplCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

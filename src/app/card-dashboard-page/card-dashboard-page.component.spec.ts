import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardPageComponent } from './card-dashboard-page.component';

describe('CardDashboardPageComponent', () => {
  let component: CardDashboardPageComponent;
  let fixture: ComponentFixture<CardDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

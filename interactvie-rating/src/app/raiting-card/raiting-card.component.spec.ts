import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaitingCardComponent } from './raiting-card.component';

describe('RaitingCardComponent', () => {
  let component: RaitingCardComponent;
  let fixture: ComponentFixture<RaitingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaitingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaitingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

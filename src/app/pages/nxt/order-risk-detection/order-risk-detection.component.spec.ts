import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRiskDetectionComponent } from './order-risk-detection.component';

describe('OrderRiskDetectionComponent', () => {
  let component: OrderRiskDetectionComponent;
  let fixture: ComponentFixture<OrderRiskDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRiskDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderRiskDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

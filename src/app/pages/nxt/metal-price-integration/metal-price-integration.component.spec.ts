import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalPriceIntegrationComponent } from './metal-price-integration.component';

describe('MetalPriceIntegrationComponent', () => {
  let component: MetalPriceIntegrationComponent;
  let fixture: ComponentFixture<MetalPriceIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetalPriceIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetalPriceIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

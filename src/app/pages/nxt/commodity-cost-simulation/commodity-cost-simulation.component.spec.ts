import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityCostSimulationComponent } from './commodity-cost-simulation.component';

describe('CommodityCostSimulationComponent', () => {
  let component: CommodityCostSimulationComponent;
  let fixture: ComponentFixture<CommodityCostSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommodityCostSimulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommodityCostSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

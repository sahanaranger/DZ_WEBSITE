import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitSimulationComponent } from './profit-simulation.component';

describe('ProfitSimulationComponent', () => {
  let component: ProfitSimulationComponent;
  let fixture: ComponentFixture<ProfitSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitSimulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfitSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

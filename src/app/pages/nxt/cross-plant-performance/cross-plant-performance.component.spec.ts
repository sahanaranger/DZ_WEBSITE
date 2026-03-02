import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossPlantPerformanceComponent } from './cross-plant-performance.component';

describe('CrossPlantPerformanceComponent', () => {
  let component: CrossPlantPerformanceComponent;
  let fixture: ComponentFixture<CrossPlantPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossPlantPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossPlantPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

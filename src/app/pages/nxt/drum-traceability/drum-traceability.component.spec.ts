import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumTraceabilityComponent } from './drum-traceability.component';

describe('DrumTraceabilityComponent', () => {
  let component: DrumTraceabilityComponent;
  let fixture: ComponentFixture<DrumTraceabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrumTraceabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrumTraceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

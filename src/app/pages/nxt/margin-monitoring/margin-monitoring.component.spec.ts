import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginMonitoringComponent } from './margin-monitoring.component';

describe('MarginMonitoringComponent', () => {
  let component: MarginMonitoringComponent;
  let fixture: ComponentFixture<MarginMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarginMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

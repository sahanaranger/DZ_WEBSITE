import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxoDashboardComponent } from './ai-dashboard.component';

describe('CxoDashboardComponent', () => {
  let component: CxoDashboardComponent;
  let fixture: ComponentFixture<CxoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CxoDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CxoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

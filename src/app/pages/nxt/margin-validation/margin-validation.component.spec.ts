import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginValidationComponent } from './margin-validation.component';

describe('MarginValidationComponent', () => {
  let component: MarginValidationComponent;
  let fixture: ComponentFixture<MarginValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarginValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageValidationComponent } from './stage-validation.component';

describe('StageValidationComponent', () => {
  let component: StageValidationComponent;
  let fixture: ComponentFixture<StageValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

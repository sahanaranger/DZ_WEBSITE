import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableAiComponent } from './cable-ai.component';

describe('CableAiComponent', () => {
  let component: CableAiComponent;
  let fixture: ComponentFixture<CableAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CableAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

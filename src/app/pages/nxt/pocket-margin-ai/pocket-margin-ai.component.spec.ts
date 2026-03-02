import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketMarginAiComponent } from './pocket-margin-ai.component';

describe('PocketMarginAiComponent', () => {
  let component: PocketMarginAiComponent;
  let fixture: ComponentFixture<PocketMarginAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocketMarginAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocketMarginAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

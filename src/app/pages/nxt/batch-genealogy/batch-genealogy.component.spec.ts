import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchGenealogyComponent } from './batch-genealogy.component';

describe('BatchGenealogyComponent', () => {
  let component: BatchGenealogyComponent;
  let fixture: ComponentFixture<BatchGenealogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchGenealogyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchGenealogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

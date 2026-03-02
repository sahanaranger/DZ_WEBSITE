import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingCapitalComponent } from './working-capital.component';

describe('WorkingCapitalComponent', () => {
  let component: WorkingCapitalComponent;
  let fixture: ComponentFixture<WorkingCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

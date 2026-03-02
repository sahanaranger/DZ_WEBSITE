import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditGovernanceComponent } from './credit-governance.component';

describe('CreditGovernanceComponent', () => {
  let component: CreditGovernanceComponent;
  let fixture: ComponentFixture<CreditGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditGovernanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

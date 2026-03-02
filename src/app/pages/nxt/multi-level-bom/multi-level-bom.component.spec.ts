import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelBomComponent } from './multi-level-bom.component';

describe('MultiLevelBomComponent', () => {
  let component: MultiLevelBomComponent;
  let fixture: ComponentFixture<MultiLevelBomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiLevelBomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiLevelBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

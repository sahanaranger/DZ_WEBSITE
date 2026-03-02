import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlantComponent } from './multi-plant.component';

describe('MultiPlantComponent', () => {
  let component: MultiPlantComponent;
  let fixture: ComponentFixture<MultiPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

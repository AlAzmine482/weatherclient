import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarsComponent } from './manufacturer-car.component';

describe('ManufacturerCarsComponent', () => {
  let component: ManufacturerCarsComponent;
  let fixture: ComponentFixture<ManufacturerCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManufacturerCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

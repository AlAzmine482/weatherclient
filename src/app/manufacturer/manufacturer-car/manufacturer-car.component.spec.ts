import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarComponent } from './manufacturer-car.component';

describe('ManufacturerCarComponent', () => {
  let component: ManufacturerCarComponent;
  let fixture: ComponentFixture<ManufacturerCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManufacturerCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrippingPointsComponent } from './gripping-points.component';

describe('GrippingPointsComponent', () => {
  let component: GrippingPointsComponent;
  let fixture: ComponentFixture<GrippingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrippingPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrippingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

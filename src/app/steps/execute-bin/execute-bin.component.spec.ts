import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteBinComponent } from './execute-bin.component';

describe('ExecuteBinComponent', () => {
  let component: ExecuteBinComponent;
  let fixture: ComponentFixture<ExecuteBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteBinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

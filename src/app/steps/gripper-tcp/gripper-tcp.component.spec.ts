import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GripperTcpComponent } from './gripper-tcp.component';

describe('GripperTcpComponent', () => {
  let component: GripperTcpComponent;
  let fixture: ComponentFixture<GripperTcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GripperTcpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GripperTcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

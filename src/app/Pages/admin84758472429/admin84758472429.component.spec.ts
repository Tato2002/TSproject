import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin84758472429Component } from './admin84758472429.component';

describe('Admin84758472429Component', () => {
  let component: Admin84758472429Component;
  let fixture: ComponentFixture<Admin84758472429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin84758472429Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin84758472429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

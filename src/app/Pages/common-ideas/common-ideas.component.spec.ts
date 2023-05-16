import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIdeasComponent } from './common-ideas.component';

describe('CommonIdeasComponent', () => {
  let component: CommonIdeasComponent;
  let fixture: ComponentFixture<CommonIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonIdeasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIdeasComponent } from './top-ideas.component';

describe('TopIdeasComponent', () => {
  let component: TopIdeasComponent;
  let fixture: ComponentFixture<TopIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIdeasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

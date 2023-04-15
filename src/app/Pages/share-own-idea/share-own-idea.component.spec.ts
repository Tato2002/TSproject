import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOwnIdeaComponent } from './share-own-idea.component';

describe('ShareOwnIdeaComponent', () => {
  let component: ShareOwnIdeaComponent;
  let fixture: ComponentFixture<ShareOwnIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareOwnIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareOwnIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaleMentionsComponent } from './legale-mentions.component';

describe('LegaleMentionsComponent', () => {
  let component: LegaleMentionsComponent;
  let fixture: ComponentFixture<LegaleMentionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegaleMentionsComponent]
    });
    fixture = TestBed.createComponent(LegaleMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

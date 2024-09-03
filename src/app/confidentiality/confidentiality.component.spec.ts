import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialityComponent } from './confidentiality.component';

describe('ConfidentialityComponent', () => {
  let component: ConfidentialityComponent;
  let fixture: ComponentFixture<ConfidentialityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfidentialityComponent]
    });
    fixture = TestBed.createComponent(ConfidentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

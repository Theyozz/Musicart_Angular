import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollectionComponent } from './list-collection.component';

describe('ListCollectionComponent', () => {
  let component: ListCollectionComponent;
  let fixture: ComponentFixture<ListCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCollectionComponent]
    });
    fixture = TestBed.createComponent(ListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

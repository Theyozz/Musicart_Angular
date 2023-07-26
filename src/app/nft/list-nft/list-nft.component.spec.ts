import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNftComponent } from './list-nft.component';

describe('ListNftComponent', () => {
  let component: ListNftComponent;
  let fixture: ComponentFixture<ListNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNftComponent]
    });
    fixture = TestBed.createComponent(ListNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

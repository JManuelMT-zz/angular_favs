import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDetailComponent } from './fav-detail.component';

describe('FavDetailComponent', () => {
  let component: FavDetailComponent;
  let fixture: ComponentFixture<FavDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

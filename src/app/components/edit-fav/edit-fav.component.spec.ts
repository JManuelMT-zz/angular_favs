import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavComponent } from './edit-fav.component';

describe('EditFavComponent', () => {
  let component: EditFavComponent;
  let fixture: ComponentFixture<EditFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

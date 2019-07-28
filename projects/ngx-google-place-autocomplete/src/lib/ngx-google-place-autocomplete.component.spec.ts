import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglePlaceAutocompleteComponent } from './ngx-google-place-autocomplete.component';

describe('NgxGooglePlaceAutocompleteComponent', () => {
  let component: NgxGooglePlaceAutocompleteComponent;
  let fixture: ComponentFixture<NgxGooglePlaceAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGooglePlaceAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGooglePlaceAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

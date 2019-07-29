import { TestBed } from '@angular/core/testing';

import { NgxGooglePlaceAutocompleteService } from './ngx-google-place-autocomplete.service';

describe('NgxGooglePlaceAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGooglePlaceAutocompleteService = TestBed.get(NgxGooglePlaceAutocompleteService);
    expect(service).toBeTruthy();
  });
});

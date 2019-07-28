import { Directive, ElementRef, OnInit, Output, EventEmitter, NgZone } from '@angular/core';

declare let google: any;

@Directive({
    selector: '[ngx-google-place]'
})

export class NgxGooglePlaceAutocompleteDirective implements OnInit {

    private element: HTMLInputElement;
    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    constructor(elRef: ElementRef, private zone: NgZone) {
        this.element = elRef.nativeElement;
    }

    ngOnInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.element);

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            this.zone.run(() => {
                const place = this.getFormattedAddress(autocomplete.getPlace());
                if (place) {
                    this.onSelect.emit(place);
                }
            });
        });
    }

    getFormattedAddress(place) {
        const location_obj = {
            fullAddress: null,
            city: null,
            state: null,
            streetNumber: null,
            streetName: null,
            country: null,
            postalCode: null
        };

        for (let i in place.address_components) {
            const item = place.address_components[i];
            location_obj['fullAddress'] = place.formatted_address;

            if (item['types'].indexOf('locality') > -1) {
                location_obj['city'] = item['long_name'];
            } else if (item['types'].indexOf('administrative_area_level_1') > -1) {
                location_obj['state'] = item['short_name'];
            } else if (item['types'].indexOf('street_number') > -1) {
                location_obj['streetNumber'] = item['short_name'];
            } else if (item['types'].indexOf('route') > -1) {
                location_obj['streetName'] = item['long_name'];
            } else if (item['types'].indexOf('country') > -1) {
                location_obj['country'] = item['long_name'];
            } else if (item['types'].indexOf('postal_code') > -1) {
                location_obj['postalCode'] = item['short_name'];
            }
        }

        return location_obj;
    }
}

# NgxGooglePlaceAutocomplete

* A simple and lightweight google place autocomplete directive for Angular2

# Installation
#### npm
```
npm i ngx-google-place-autocomplete
```
# Integration
1. Gather your Google Place API key or get a new one here: https://developers.google.com/places/web-service/get-api-key

2. Add the google library to the head of your index.html file (be sure to replace `<YOUR API KEY>` with your key):
```
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=<YOUR API KEY>&libraries=places"></script>
```
# Usage
1. Import the directive into your app.module.ts and add it to the `declarations`
```ts
import { NgxGooglePlaceAutocompleteDirective } from 'ngx-google-place-autocomplete'

@NgModule({
  declarations: [
    ...,
    NgxGooglePlaceAutocompleteDirective,
    ...
  ],
})
 ```
2. Add the `ngx-google-place` directive to any text input field (the `onAddressChange()` function can be named anything you like)
```
<input type="text" ngx-google-place (onSelect)="onAddressChange($event)">
```
3. In the typescript file that corresponds to the html file where the directive was added, create the function that will be triggered when an address is chosen
```
onAddressChange(event: any) {
  console.log('Address change:', event);
}
```
4. The payload returned will look like
```
{
  city: "Mountain View"
  country: "United States"
  fullAddress: "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
  postalCode: "94043"
  state: "CA"
  streetName: "Amphitheatre Parkway"
  streetNumber: "1600"
}
```
# GitHub
Please feel free to declare issues or contribute: https://github.com/t-g-c/ngx-google-place-autocomplete

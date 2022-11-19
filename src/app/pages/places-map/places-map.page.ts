import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapStateService } from 'src/app/services/map-state/map-state.service';
import {
  GoogleMap,
  MapInfoWindow,
  MapGeocoder,
  MapGeocoderResponse,
} from '@angular/google-maps';

@Component({
  selector: 'app-csale-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {
  searchbarInput;
  @ViewChild('search') public searchElementRef: ElementRef;
  @ViewChild('asGeoCoder', { static: true }) asGeocoder: ElementRef;
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  latitude!: any;
  longitude!: any;
  zoom = 50;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  };
  markers = [] as any;
  constructor( private ngZone: NgZone, private geoCoder: MapGeocoder) { }

  onSearchInputChange(event){
    console.log('event') 
    console.log(event.detail.value)
    console.log('this.searchElementRef')
    console.log(this.searchElementRef)
  }
  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat(),  place.geometry.location?.lng());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();

        // Set marker position
        this.setMarkerPosition(this.latitude, this.longitude);

        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }

  ngOnInit() {
    // //esto es por si no tiene activado el gps, bueno, pongo por defecto cordoba, arg
    // const geocoder = new google.maps.Geocoder();
    // geocoder
    //   .geocode({ address: "Córdoba, Capital, Córdoba, Argentina" })
    //   .then((response) => {
    //     const position = [response.results[0].geometry.location.lat(), response.results[0].geometry.location.lng()];
    //     this.center = {
    //       lat: position[0],
    //       lng: position[1],
    //     };
    //     this.setMarkerPosition(this.center.lat, this.center.lng);

    //   })
    //   .catch((e) =>
    //     window.alert("Geocode was not successful for the following reason: " + e)
    //   );

    navigator.geolocation.getCurrentPosition((position) => {
      console.log('LLEGOOO')
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // Set marker position
      // this.setMarkerPosition(this.latitude, this.longitude);
    });
  }

  setMarkerPosition(latitude: any, longitude: any) {
    // Set marker position
    this.markers = [
      {
        position: {
          lat: latitude,
          lng: longitude,
        },
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true,
        },
      },
    ];
  }

  eventHandler(event: any, name: string) {
    // console.log(event, name);

    switch (name) {
      case 'mapDblclick': // Add marker on double click event
        break;

      case 'mapDragMarker':
        break;

      case 'mapDragend':
        this.getAddress(event.latLng.lat(), event.latLng.lng());
        break;

      default:
        break;
    }
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder
      .geocode({ location: { lat: latitude, lng: longitude } })
      .subscribe((addr: MapGeocoderResponse) => {
        if (addr.status === 'OK') {
          if (addr.results[0]) {
            this.zoom = 12;
            this.searchbarInput = addr.results[0].formatted_address;
          } else {
            this.searchbarInput = '';
            window.alert('No results found');
          }
        } else {
          this.searchbarInput = '';
          window.alert('Geocoder failed due to: ' + addr.status);
        }
      });
  }
}

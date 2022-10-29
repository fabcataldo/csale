import { EventEmitter, Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from 'mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  map: Mapboxgl.Map;
  mapbox = (Mapboxgl as typeof Mapboxgl);
  geocoderAddressChange = new EventEmitter<any>();
  style = 'mapbox://styles/mapbox/streets-v11';
  geocoder;

  constructor() {
    this.mapbox.accessToken = environment.mapboxKey;
  }

  buildMap(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        // (Mapboxgl as any).accessToken = environment.mapboxKey;
        this.map = new Mapboxgl.Map({
          container: 'map', // container ID
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [-64.1915012, -31.4265492], // starting position [lNG, lat]
          zoom: 15.25 // starting zoom,
        });

        // Add zoom and rotation controls to the map.
        this.map.addControl(new Mapboxgl.NavigationControl());
        this.map.addControl(new Mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }));

        this.geocoder = new MapboxGeocoder({
          accessToken: environment.mapboxKey,
          mapboxgl: Mapboxgl,
          placeholder: '¿A donde queres ir hoy?'
        });

        this.geocoder.on('result', ($event) => {
          const { result } = $event;
          // geocoder.clear();
          console.log('result: ', result);
          this.geocoderAddressChange.emit(result);
        })


        resolve({
          map: this.map,
          geocoder: this.geocoder
        });
        // this.map.on('click', (event) => {
        //   const coordinates = [event.lngLat.lng, event.lngLat.lat];
        // });
        // this.map.addControl(geocoder);
      } catch (error) {
        reject(error);
      }
    })
  }

  addMarker(coords): any {
    console.log('----->', coords)
    const el = document.createElement('div');
    el.className = 'marker';

    const variable = new Mapboxgl.Marker().setLngLat(coords).addTo(this.map);
    // variable.remove();
    return variable;
  }
  
}

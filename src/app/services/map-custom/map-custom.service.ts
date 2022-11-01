import { EventEmitter, Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  map: Mapboxgl.Map;
  mapbox = (Mapboxgl as typeof Mapboxgl);
  geocoderAddressChange = new EventEmitter<any>();
  style = 'mapbox://styles/mapbox/streets-v11';
  geocoder;

  constructor(private httpClient: HttpClient) {
    this.mapbox.accessToken = environment.mapboxKey;
  }

  buildMap(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.map = new Mapboxgl.Map({
          container: 'map', // container ID
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


        resolve({
          map: this.map,
        });
      } catch (error) {
        reject(error);
      }
    })
  }

  addMarker(coords: [number, number]): any {
    console.log('----->', coords)
    const el = document.createElement('div');
    el.className = 'marker';

    const variable = new Mapboxgl.Marker().setLngLat(coords).addTo(this.map);
    this.map.setCenter(coords);
    return variable;
  }

  findPlace(place: string): Observable<any>{
    return this.httpClient.get<any>('https://api.mapbox.com/geocoding/v5/mapbox.places/jhonny%20b.%20good%20cordoba.json?access_token=pk.eyJ1IjoiZmFiYzIwMjEiLCJhIjoiY2trMnFiZno2MTNucDJ2dDFzZXlnYjVxaCJ9.JjoFFJseYMFqAmZ54IPo_Q&country=AR')
  }
  
}

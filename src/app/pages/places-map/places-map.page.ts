import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from 'mapbox-gl-geocoder';
import * as GeoJSON from 'geojson';

@Component({
  selector: 'app-csale-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {
  @ViewChild('asGeoCoder', { static: true }) asGeocoder: ElementRef;
  map: Mapboxgl.Map;
  cbAddress;
  
  constructor(private renderer2: Renderer2) { }

  ngOnInit() {

    (Mapboxgl as any).accessToken = environment.mapboxKey;
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

    const geocoder = new MapboxGeocoder({
      accessToken: environment.mapboxKey,
      mapboxgl: Mapboxgl,
      placeholder: '¿A donde queres ir hoy?'
    });
    
    geocoder.on('result', ($event) => {
      const {result} = $event;
      // geocoder.clear();
      console.log('result: ', result);
      this.cbAddress.emit(result);
    })
    
    console.log('Tgeocoder');
    console.log(geocoder);
    this.renderer2.appendChild(this.asGeocoder.nativeElement, geocoder.onAdd(this.map));

    this.map.on('click', (event)=>{
      const coordinates = [event.lngLat.lng, event.lngLat.lat];
    });
    // this.map.addControl(geocoder);
  }

  ionViewDidEnter(){

  }

}

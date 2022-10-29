import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MapCustomService } from 'src/app/services/map-custom/map-custom.service';

@Component({
  selector: 'app-csale-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {
  @ViewChild('asGeoCoder', { static: true }) asGeocoder: ElementRef;

  geocoderAddressResult;
  
  constructor(private renderer2: Renderer2, private mapCustomService: MapCustomService) { }

  ngOnInit() {
    this.mapCustomService.geocoderAddressChange.subscribe(response=>{
      this.geocoderAddressResult = response;
      this.mapCustomService.addMarker(this.geocoderAddressResult.geometry.coordinates);
    })
    this.mapCustomService.buildMap().then(({geocoder, map})=>{
      console.log('Tgeocoder');
      console.log(geocoder);
      this.renderer2.appendChild(this.asGeocoder.nativeElement, geocoder.onAdd(map));
    })
    .catch((err) =>{
      console.log('ERROR: ', err)
    })
  }

}

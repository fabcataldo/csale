import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MapCustomService } from 'src/app/services/map-custom/map-custom.service';
import { places } from 'src/dummy_data/places';

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
    this.mapCustomService.buildMap().then(({map})=>{

      console.log('map')
      console.log(map)
    })
    .catch((err) =>{
      console.log('ERROR: ', err)
    })
  }

  findPlace(): any {
    let findPlaceInPlaces
    this.mapCustomService.findPlace('').subscribe(resp=>{
      places.forEach(place => {
        findPlaceInPlaces = resp.features.find(feature => feature.properties.address.includes(place.address));
        if(findPlaceInPlaces) {
          findPlaceInPlaces = [findPlaceInPlaces.geometry.coordinates[0], findPlaceInPlaces.geometry.coordinates[1]];
        }
      })
    })
    console.log('find place in places')
    console.log(findPlaceInPlaces)
    return findPlaceInPlaces;
  }

  onSearchbarChange(event){
    console.log('onsrearchbar cha')
    console.log(event.detail.value)
    let coords = this.findPlace();
    this.mapCustomService.addMarker(coords);
  }
}

import { Injectable } from '@angular/core';
import { CurrentPlace } from 'src/app/models/currentPlaces';
import { Place } from 'src/app/models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesManagementStateService {
  //aca se va a manejar la lista de lugares para las pags del special-tabs
  //para mandarlas al mapa, cuando se detecte el click del boton "Mapa"
  //cuando el usuario esté en una de las pags de las cards del inicio de special-tabs
  currentPlaces: Array<CurrentPlace> = [];
  currentPlace: CurrentPlace;
}

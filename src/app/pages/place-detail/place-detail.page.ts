import { Component, OnInit } from '@angular/core';
import { CurrentPlace } from 'src/app/models/currentPlaces';
import { getColorOccupationLevel } from 'src/app/utils/getColorOccupationLevel';
import { getOccupationLevelName } from 'src/app/utils/getOccupationLevelName';
import { PlacesManagementStateService } from '../special-tabs/services/places-management-state/places-management-state.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  currentPlace: CurrentPlace;
  constructor(
    private placesManagementStateService: PlacesManagementStateService,
  ) { }
  getOccupationLevelName = getOccupationLevelName;
  getColorOccupationLevel = getColorOccupationLevel;

  ngOnInit() {
    this.currentPlace = this.placesManagementStateService.currentPlace;
    console.log('currentpolace')
    console.log(this.placesManagementStateService.currentPlace)
  }

  getOpenningStatus = (isOpen: boolean) => {
    return isOpen ? 'Está Abierto' : 'Está cerrado';
  }

  goToSocialMedia(url: string){
    window.location.href = url;
  }

  isFacebookOrInstag(url: string){
    return url.includes('facebook') || false;
  }
}

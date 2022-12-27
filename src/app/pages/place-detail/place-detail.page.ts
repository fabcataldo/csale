import { Component, OnInit } from '@angular/core';
import { CurrentPlace } from 'src/app/models/currentPlaces';
import { Experience } from 'src/app/models/experience';
import { ExperiencesService } from 'src/app/services/experiences/experiences.service';
import { UsersService } from 'src/app/services/users/users.service';
import { getColorOccupationLevel } from 'src/app/utils/getColorOccupationLevel';
import { getOccupationLevelName } from 'src/app/utils/getOccupationLevelName';
import { getSCSSVarValue } from 'src/app/utils/getSCSSVarValue';
import { PlacesManagementStateService } from '../special-tabs/services/places-management-state/places-management-state.service';
import * as moment from 'moment';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  currentPlace: CurrentPlace;
  placeExperiences: Array<Experience> = [];
  userPlaceExp = [];

  constructor(
    private placesManagementStateService: PlacesManagementStateService,
    private experiencesService: ExperiencesService,
    private usersService: UsersService
  ) { }
  getOccupationLevelName = getOccupationLevelName;
  getColorOccupationLevel = getColorOccupationLevel;
  getSCSSVarValue = getSCSSVarValue;

  getFormattedDate = (date:string) => {
    return moment(date).locale('es').format('L');
  }
  ngOnInit() {
    this.currentPlace = this.placesManagementStateService.currentPlace;
    this.experiencesService.getExperiences().subscribe(data => {

      this.currentPlace.place.experiences.forEach(experience => {
        let findExp = data.find(item => item._id === experience);
        this.placeExperiences.push(findExp);
      });
    });
    this.usersService.getUsers().subscribe(data => {
      for(const user of data) {
        this.userPlaceExp.push({
          experiences: user.experiences.map(userExp => this.placeExperiences.find(placeExp=> placeExp._id === userExp)),
          user: user
        })
      }
    });
    console.log('this.userplacexp')
    console.log(this.userPlaceExp)
  }

  getOpenningStatus = (isOpen: boolean) => {
    return isOpen ? 'Está Abierto' : 'Está cerrado';
  }

  goToSocialMedia(url: string) {
    window.location.href = url;
  }

  isFacebookOrInstag(url: string) {
    return url.includes('facebook') || false;
  }
}

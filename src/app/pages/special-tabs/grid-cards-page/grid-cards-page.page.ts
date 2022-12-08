import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/models/place';
import { opening_state_place } from 'src/dummy_data/opening_state_place';
import { places } from 'src/dummy_data/places';
import { PlacesManagementStateService } from '../services/places-management-state/places-management-state.service';

@Component({
  selector: 'app-grid-cards-page',
  templateUrl: './grid-cards-page.page.html',
  styleUrls: ['./grid-cards-page.page.scss'],
})
export class GridCardsPagePage implements OnInit {
  places: Array<Place>;
  tag: string;
  pageTitle: string;
  searchInput = '';
  constructor(
    private route: ActivatedRoute,
    private placesManagementStateService: PlacesManagementStateService
  ) { }

  ngOnInit() {
    let findPlaces = places.filter(place => place.tags.find(tag => tag === this.route.snapshot.params.tag));
    this.placesManagementStateService.currentPlaces = [];
    findPlaces.forEach(place => {
      let findOpeningState = opening_state_place.find(openingState => openingState.id_place === place._id);
      if (findOpeningState) {
        this.placesManagementStateService.currentPlaces.push({
          place,
          currentOpeningState: findOpeningState
        });
      }
    })
    console.log(this.placesManagementStateService.currentPlaces)
    switch (this.route.snapshot.params.tag) {
      case 'party': this.pageTitle = '¡Quiero fiesta!';
        break;
      case 'evening-snack': this.pageTitle = '¡A merendar!';
        break;
      case 'after-office': this.pageTitle = 'After office';
        break;
      case 'middle-week': this.pageTitle = 'Cortando la semana';
        break;
      case 'special-dinner': this.pageTitle = 'Cena tranqui';
        break;
      case 'special-lunch': this.pageTitle = 'Almuerzo tranqui';
        break;
    }
    // if (this.route.snapshot.params.tag) {
    //   this.tag = this.route.snapshot.data['tag'];
    // }
  }

  getPlaceList = (filter = '', currentPlaces) => {
    return currentPlaces.filter(place => place.place.name.toLowerCase().includes(filter.toLowerCase()));
  }

  //capturo el evento, y filtro los places que voy a mostrar en el html
  onSearchInputChange(event) {
    console.log('event')
    console.log(event)
    this.searchInput = event.detail.value;
  }

  getOccupationLevelName = (occupationLevel) => {
    if (occupationLevel === 'low') {
      return 'Ocupación baja';
    } else {
      if (occupationLevel === 'moderate') {
        return 'Ocupación media';
      } else {
        return 'Ocupación alta';
      }
    }
  }

  getOpenningStatus = (isOpen) => {
    return isOpen ? 'Abierto' : 'Cerrado';
  }

  getPlacesListTitle = (places) => {
    return places > 1 ? `${places} lugares` : `${places} lugar`;
  }
}

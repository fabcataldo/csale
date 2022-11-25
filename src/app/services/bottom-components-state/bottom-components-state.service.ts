import { ElementRef, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
//creo que no va a servir, fijarse que onda
export class BottomComponentsStateService {
    topTabs = [
        {
          id: 0,
          label: "Salidas para vos",
          route: 'special-tabs/events-for-you'
        },
        {
          id: 1,
          label: "Eventos",
          route: 'special-tabs/events'
        },
        {
          id: 2,
          label: "Lugares",
          route: 'special-tabs/places'
        },
      ]
    
      bottomTabs=[
        {
          id: 0,
          icon: "assets/imgs/user.svg",
          route: 'my-profile/'
        },
        {
          id: 1,
          icon: "assets/imgs/purchases-made.svg",
          route: 'purchases-made/'
        },
        {
          id: 2,
          icon: "assets/imgs/home.svg",
          route: 'special-tabs/events-for-you'
        },
        {
          id: 3,
          icon: "assets/imgs/favourite-places.svg",
          route: 'favorite-places/'
        },
        {
          id: 4,
          icon: "assets/imgs/available-benefits.svg",
          route: 'available-benefits/'
        },
      ]
}

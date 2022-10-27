import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePlacesPageRoutingModule } from './favorite-places-routing.module';

import { FavoritePlacesPage } from './favorite-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePlacesPageRoutingModule
  ],
  declarations: [FavoritePlacesPage]
})
export class FavoritePlacesPageModule {}

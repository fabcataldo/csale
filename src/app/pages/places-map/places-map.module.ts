import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesMapPageRoutingModule } from './places-map-routing.module';

import { PlacesMapPage } from './places-map.page';
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesMapPageRoutingModule
  ],
  declarations: [PlacesMapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlacesMapPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesMapPageRoutingModule } from './places-map-routing.module';

import { PlacesMapPage } from './places-map.page';
import { CSaleCommonComponentsModule } from 'src/app/common/csale-common-components.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesMapPageRoutingModule,
    CSaleCommonComponentsModule,
    GoogleMapsModule,
  ],
  declarations: [PlacesMapPage],
  providers: []
})
export class PlacesMapPageModule {}

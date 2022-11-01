import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesMapPageRoutingModule } from './places-map-routing.module';

import { PlacesMapPage } from './places-map.page';
import { CSaleCommonComponentsModule } from 'src/app/common/components/csale-common-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesMapPageRoutingModule,
    CSaleCommonComponentsModule,
  ],
  declarations: [PlacesMapPage],
  providers: []
})
export class PlacesMapPageModule {}

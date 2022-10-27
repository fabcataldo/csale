import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPlacesPageRoutingModule } from './tab-places-routing.module';

import { TabPlacesPage } from './tab-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPlacesPageRoutingModule
  ],
  declarations: [TabPlacesPage]
})
export class TabPlacesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEventsPageRoutingModule } from './tab-events-routing.module';

import { TabEventsPage } from './tab-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEventsPageRoutingModule
  ],
  declarations: [TabEventsPage]
})
export class TabEventsPageModule {}

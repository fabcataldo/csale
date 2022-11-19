import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTypeEventsForYouPageRoutingModule } from './tab-events-for-you-routing.module';

import { TabEventsForYouPage } from './tab-events-for-you.page';
import { CSaleSpecialTabsComponentsModule } from '../components/csale-special-tabs-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTypeEventsForYouPageRoutingModule,
    CSaleSpecialTabsComponentsModule
  ],
  declarations: [TabEventsForYouPage]
})
export class TabTypeEventsForYouPageModule {}

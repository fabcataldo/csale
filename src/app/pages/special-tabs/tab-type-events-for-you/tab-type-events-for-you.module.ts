import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTypeEventsForYouPageRoutingModule } from './tab-type-events-for-you-routing.module';

import { TabTypeEventsForYouPage } from './tab-type-events-for-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTypeEventsForYouPageRoutingModule
  ],
  declarations: [TabTypeEventsForYouPage]
})
export class TabTypeEventsForYouPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';

import { PlaceDetailPage } from './place-detail.page';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { CSaleCommonComponentsModule } from 'src/app/common/csale-common-components.module';
import { IonRatingStarsModule } from 'ion-rating-stars';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule,
    InlineSVGModule.forRoot(),
    CSaleCommonComponentsModule,
    IonRatingStarsModule
  ],
  declarations: [PlaceDetailPage]
})
export class PlaceDetailPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridCardsPagePageRoutingModule } from './grid-cards-page-routing.module';

import { GridCardsPagePage } from './grid-cards-page.page';
import { CSaleSpecialTabsComponentsModule } from '../components/csale-special-tabs-components.module';
import { CSaleCommonComponentsModule } from 'src/app/common/csale-common-components.module';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridCardsPagePageRoutingModule,
    CSaleSpecialTabsComponentsModule,
    CSaleCommonComponentsModule,
    InlineSVGModule.forRoot(),
  ],
  declarations: [GridCardsPagePage]
})
export class GridCardsPagePageModule {}

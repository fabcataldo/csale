import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialTabsPageRoutingModule } from './special-tabs-routing.module';

import { SpecialTabsPage } from './special-tabs.page';
import { CSaleSpecialTabsComponentsModule } from './components/csale-special-tabs-components.module';
import { CSaleCommonComponentsModule } from 'src/app/common/csale-common-components.module';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialTabsPageRoutingModule,
    CSaleSpecialTabsComponentsModule,
    CSaleCommonComponentsModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [SpecialTabsPage],
})
export class SpecialTabsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialTabsPageRoutingModule } from './special-tabs-routing.module';

import { SpecialTabsPage } from './special-tabs.page';
import { CSaleSpecialTabsComponentsModule } from './components/csale-special-tabs-components.module';
import { CSaleTopTabsRoutingModule } from './components/csale-top-tabs/csale-top-tabs-routing.module';
import { CSaleCommonComponentsModule } from 'src/app/common/components/csale-common-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialTabsPageRoutingModule,
    CSaleSpecialTabsComponentsModule,
    CSaleTopTabsRoutingModule,
    CSaleCommonComponentsModule
  ],
  declarations: [SpecialTabsPage]
})
export class SpecialTabsPageModule {}

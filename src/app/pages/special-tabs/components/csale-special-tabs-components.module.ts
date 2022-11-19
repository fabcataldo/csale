import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleTopTabsComponent } from './csale-top-tabs/csale-top-tabs.component';
import { CSaleGridCardsComponent } from './csale-grid-cards/csale-grid-cards.component';
import { CSalePairFixedButtonsComponent } from './csale-pair-fixed-buttons/csale-pair-fixed-buttons.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CSaleTopTabsComponent, CSaleGridCardsComponent, CSalePairFixedButtonsComponent],
  exports: [CSaleTopTabsComponent, CSaleGridCardsComponent, CSalePairFixedButtonsComponent]
})
export class CSaleSpecialTabsComponentsModule {}

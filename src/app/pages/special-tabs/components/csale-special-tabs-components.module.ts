import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleGridCardsComponent } from './csale-grid-cards/csale-grid-cards.component';
import { CSalePairFixedButtonsComponent } from './csale-pair-fixed-buttons/csale-pair-fixed-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CSaleGridCardsComponent, CSalePairFixedButtonsComponent],
  exports: [CSaleGridCardsComponent, CSalePairFixedButtonsComponent]
})
export class CSaleSpecialTabsComponentsModule { }

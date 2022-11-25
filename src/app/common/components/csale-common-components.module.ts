import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleSearchbarComponent } from './csale-searchbar/csale-searchbar.component';
import { CSaleTabsBarComponent } from './csale-tabs-bar/csale-tabs-bar.component';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [CSaleSearchbarComponent, CSaleTabsBarComponent],
  exports: [CSaleSearchbarComponent, CSaleTabsBarComponent]
})
export class CSaleCommonComponentsModule {}

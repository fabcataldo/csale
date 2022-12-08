import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleSearchbarComponent } from './components/csale-searchbar/csale-searchbar.component';
import { CSaleTabsBarComponent } from './components/csale-tabs-bar/csale-tabs-bar.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { CSalePipe } from './pipes/csalepipe/csalepipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [CSaleSearchbarComponent, CSaleTabsBarComponent, CSalePipe],
  exports: [CSaleSearchbarComponent, CSaleTabsBarComponent, CSalePipe]
})
export class CSaleCommonComponentsModule {}

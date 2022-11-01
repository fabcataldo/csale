import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleSearchbarComponent } from './csale-searchbar/csale-searchbar.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CSaleSearchbarComponent],
  exports: [CSaleSearchbarComponent]
})
export class CSaleCommonComponentsModule {}

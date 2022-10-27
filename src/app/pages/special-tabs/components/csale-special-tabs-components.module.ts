import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CSaleTopTabsModule } from './csale-top-tabs/csale-top-tabs.component.module';
import { CSaleTopTabsComponent } from './csale-top-tabs/csale-top-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CSaleTopTabsModule
  ],
  declarations: [CSaleTopTabsComponent],
  exports: [CSaleTopTabsComponent]
})
export class CSaleSpecialTabsComponentsModule {}

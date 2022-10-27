import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableBenefitsPageRoutingModule } from './available-benefits-routing.module';

import { AvailableBenefitsPage } from './available-benefits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableBenefitsPageRoutingModule
  ],
  declarations: [AvailableBenefitsPage]
})
export class AvailableBenefitsPageModule {}

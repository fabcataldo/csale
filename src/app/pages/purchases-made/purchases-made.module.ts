import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasesMadePageRoutingModule } from './purchases-made-routing.module';

import { PurchasesMadePage } from './purchases-made.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasesMadePageRoutingModule
  ],
  declarations: [PurchasesMadePage]
})
export class PurchasesMadePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableBenefitsPage } from './available-benefits.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableBenefitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableBenefitsPageRoutingModule {}

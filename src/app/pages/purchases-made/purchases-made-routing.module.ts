import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasesMadePage } from './purchases-made.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasesMadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesMadePageRoutingModule {}

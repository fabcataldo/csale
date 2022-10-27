import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPlacesPage } from './tab-places.page';

const routes: Routes = [
  {
    path: '',
    component: TabPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPlacesPageRoutingModule {}

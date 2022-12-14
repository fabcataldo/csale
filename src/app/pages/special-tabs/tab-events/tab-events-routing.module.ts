import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEventsPage } from './tab-events.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEventsPageRoutingModule {}

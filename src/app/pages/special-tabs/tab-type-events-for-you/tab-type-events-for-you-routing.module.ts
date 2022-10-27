import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTypeEventsForYouPage } from './tab-type-events-for-you.page';

const routes: Routes = [
  {
    path: '',
    component: TabTypeEventsForYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTypeEventsForYouPageRoutingModule {}

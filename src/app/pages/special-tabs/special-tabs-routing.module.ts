import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialTabsPage } from './special-tabs.page';
import { TabEventsPage } from './tab-events/tab-events.page';
import { TabPlacesPage } from './tab-places/tab-places.page';
import { TabTypeEventsForYouPage } from './tab-type-events-for-you/tab-type-events-for-you.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialTabsPage,
    children: [
      {
        path: 'events-for-you',
        component: TabTypeEventsForYouPage,
      },
      {
        path: 'places',
        component: TabPlacesPage,
      },
      {
        path: 'events',
        component: TabEventsPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialTabsPageRoutingModule {}

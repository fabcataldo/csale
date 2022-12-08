import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialTabsPage } from './special-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialTabsPage,
    children: [
      {
        path: 'events-for-you',
        loadChildren: () => import('./tab-events-for-you/tab-events-for-you.module').then(m => m.TabTypeEventsForYouPageModule)
      },
      {
        path: 'places',
        loadChildren: () => import('./tab-places/tab-places.module').then(m => m.TabPlacesPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./tab-events/tab-events.module').then(m => m.TabEventsPageModule)
      },
    ],
  },
  {
    path: 'grid-cards-page/:tag',
    loadChildren: () => import('./grid-cards-page/grid-cards-page.module').then(m => m.GridCardsPagePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialTabsPageRoutingModule { }

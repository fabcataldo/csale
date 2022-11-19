import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabEventsForYouPage } from './tab-events-for-you.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventsForYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTypeEventsForYouPageRoutingModule {}

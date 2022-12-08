import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridCardsPagePage } from './grid-cards-page.page';

const routes: Routes = [
  {
    path: '',
    component: GridCardsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridCardsPagePageRoutingModule {}

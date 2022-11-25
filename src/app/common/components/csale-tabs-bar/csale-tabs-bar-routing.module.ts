import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CSaleTabsBarComponent } from './csale-tabs-bar.component';

const routes: Routes = [
  {
    path: '',
    component: CSaleTabsBarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSaleTabsBarRoutingModule {}


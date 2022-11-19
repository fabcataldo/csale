import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CSaleTopTabsComponent } from './csale-top-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: CSaleTopTabsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSaleTopTabsRoutingModule {}


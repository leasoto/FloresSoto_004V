import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaminacionPage } from './contaminacion.page';

const routes: Routes = [
  {
    path: '',
    component: ContaminacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaminacionPageRoutingModule {}

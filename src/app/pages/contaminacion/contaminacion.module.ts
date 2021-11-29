import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaminacionPageRoutingModule } from './contaminacion-routing.module';

import { ContaminacionPage } from './contaminacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaminacionPageRoutingModule
  ],
  declarations: [ContaminacionPage]
})
export class ContaminacionPageModule {}

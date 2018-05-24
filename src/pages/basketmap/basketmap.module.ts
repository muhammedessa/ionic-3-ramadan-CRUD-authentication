import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketmapPage } from './basketmap';

@NgModule({
  declarations: [
    BasketmapPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketmapPage),
  ],
})
export class BasketmapPageModule {}

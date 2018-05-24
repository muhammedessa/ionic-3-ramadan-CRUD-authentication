import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftplacePage } from './giftplace';

@NgModule({
  declarations: [
    GiftplacePage,
  ],
  imports: [
    IonicPageModule.forChild(GiftplacePage),
  ],
})
export class GiftplacePageModule {}

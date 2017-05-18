import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseDetail } from './expense-detail';

@NgModule({
  declarations: [
    ExpenseDetail,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseDetail),
  ],
  exports: [
    ExpenseDetail
  ]
})
export class ExpenseDetailModule {}

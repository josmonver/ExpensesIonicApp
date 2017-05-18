import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesHistory } from './expenses-history';

@NgModule({
  declarations: [
    ExpensesHistory,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesHistory),
  ],
  exports: [
    ExpensesHistory
  ]
})
export class ExpensesHistoryModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthExpenses } from './month-expenses';

@NgModule({
  declarations: [
    MonthExpenses,
  ],
  imports: [
    IonicPageModule.forChild(MonthExpenses),
  ],
  exports: [
    MonthExpenses
  ]
})
export class MonthExpensesModule {}

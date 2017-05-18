import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExpenseDetail } from "../pages";
import { Expense } from "../../models/expense";
import { ExpensesService } from "../../providers/providers";


@IonicPage()
@Component({
  selector: 'page-month-expenses',
  templateUrl: 'month-expenses.html',
})
export class MonthExpenses {
  expenses: Expense[];
  totalExpense: Number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private expensesService: ExpensesService) {
      expensesService.getCurrentMonthExpenses().subscribe(data => this.expenses = data);
      expensesService.getCurrentMonthTotalExpense().subscribe(data => this.totalExpense = data);
  }
  
  itemSelected($event, expense) {
    this.navCtrl.push(ExpenseDetail, expense);
  }

}
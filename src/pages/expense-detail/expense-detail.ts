import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetail {

  expense: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expense = navParams.data;
  }

}

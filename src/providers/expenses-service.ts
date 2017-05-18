import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Expense } from "../models/expense";


@Injectable()
export class ExpensesService {S

  private baseApiUrl = 'http://localhost:58031/api';

  constructor(public http: Http) {
  }

  getCurrentMonthExpenses(): Observable<Expense[]> {
    var dateFrom = this.getDateFrom();
    var dateTo = this.getDateTo();

    return this.http.get(`${this.baseApiUrl}/expenses?dateFrom=${dateFrom}&dateTo=${dateTo}`)
      .map(res => <Expense[]>res.json());
  }

  getCurrentMonthTotalExpense(): Observable<Number> {
    var dateFrom = this.getDateFrom();
    var dateTo = this.getDateTo();

    return this.http.get(`${this.baseApiUrl}/expenses/GetTotal?dateFrom=${dateFrom}&dateTo=${dateTo}`)
      .map(res => <Number>res.json());
  }

  private getDateFrom(): string {
    var currentDate = new Date();
    var dateFrom = new Date(currentDate.getFullYear(), currentDate.getMonth()).toDateString();

    return dateFrom;
  }

  private getDateTo(): string {
    var currentDate = new Date();
    var nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    var dateTo = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth()).toDateString();

    return dateTo;
  }
}
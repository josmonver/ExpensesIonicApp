import { DateTime } from "ionic-angular";

export interface Expense {
  id: string;
  comment: string;
  amount: number;
  date: DateTime;
}
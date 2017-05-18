import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";

import { MonthExpenses, ExpenseDetail, ExpensesHistory } from "../pages/pages";
import { ExpensesService } from "../providers/providers";

@NgModule({
  declarations: [
    MyApp,
    MonthExpenses,
    ExpenseDetail,
    ExpensesHistory,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MonthExpenses,
    ExpenseDetail,
    ExpensesHistory,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpensesService,
  ]
})
export class AppModule {}

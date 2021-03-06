import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Http, HttpModule } from '@angular/http';

import { MonthExpenses, ExpensesHistory } from "../pages/pages";
import { ExpensesService } from "../providers/providers";

@Component({
  templateUrl: 'app.html',
  providers: [
    ExpensesService,
    //HttpModule,
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make MonthExpensesPage the root (or first) page
  rootPage = MonthExpenses;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Histórico', component: ExpensesHistory },
      { title: 'Gasto mensual', component: MonthExpenses },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SearchPage } from "../pages/search/search";
import { HomePage } from '../pages/home/home';
import { FavorisPage} from "../pages/favoris/favoris";
import { ProfilePage} from "../pages/profile/profile";
import { Add_ContentPage} from "../pages/add_content/add_content";
import { AppState } from './app.global';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,/* public global: AppState,*/ public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Search', component: SearchPage},
      { title: 'Profile', component: ProfilePage},
      { title: 'Add photo', component: Add_ContentPage},
      { title: 'Favoris', component: FavorisPage}
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
   //   this.global.set('theme', 'theme-dark');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

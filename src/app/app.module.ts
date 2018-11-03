import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from "../pages/search/search";
import { FavorisPage} from "../pages/favoris/favoris";
import { ProfilePage} from "../pages/profile/profile";
import { Add_ContentPage} from "../pages/add_content/add_content";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    FavorisPage,
    ProfilePage,
    Add_ContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    FavorisPage,
    ProfilePage,
    Add_ContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

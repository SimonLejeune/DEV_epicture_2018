import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicImageViewerModule} from 'ionic-img-viewer'
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SearchPage} from "../pages/search/search";
import {FavorisPage} from "../pages/favoris/favoris";
import {ProfilePage} from "../pages/profile/profile";
import {Add_ContentPage} from "../pages/add_content/add_content";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera'
import {HttpClientModule} from '@angular/common/http';
import {ImgurApiProvider} from '../providers/imgur-api/imgur-api';
import {IonicImageLoader} from "ionic-image-loader";

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
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        IonicImageViewerModule,
        IonicImageLoader.forRoot()
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
        Camera,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ImgurApiProvider
    ]
})
export class AppModule {
}

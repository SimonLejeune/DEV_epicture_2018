import {Component, ViewChild} from '@angular/core';
import {NavController, Nav} from 'ionic-angular';

import {Add_ContentPage} from '../add_content/add_content';
import {SearchPage} from "../search/search";
import {ProfilePage} from "../profile/profile";
import {FavorisPage} from "../favoris/favoris";
import {ImgurApiProvider} from "../../providers/imgur-api/imgur-api";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    @ViewChild(Nav) nav: Nav;
    openMenu = false;
    homeGallery = [];

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
    }

    constructor(public navCtrl: NavController, public ImgurApiProvider: ImgurApiProvider) {
        this.getHomeGallery();
    }

    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }

    goToHome() {
        this.navCtrl.setRoot(SearchPage);
        this.togglePopupMenu();
    }

    goSearch() {
        this.navCtrl.setRoot(SearchPage)
        this.togglePopupMenu();
    }

    goToProfile() {
        this.navCtrl.setRoot(ProfilePage)
        this.togglePopupMenu();
    }

    goToAdd() {
        this.navCtrl.setRoot(Add_ContentPage)
        this.togglePopupMenu();
    }

    goToFavoris() {
        this.navCtrl.setRoot(FavorisPage)
        this.togglePopupMenu();
    }

    getHomeGallery() {
        this.ImgurApiProvider.getHomeGallery().then(data => {
            this.homeGallery = data;
        })
    }
}

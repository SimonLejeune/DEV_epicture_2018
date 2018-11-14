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

    posts = [
        {
            postImageUrl: "../../assets/imgs/3.jpg",
            text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
            date: 'November 5, 2016',
            likes: 12,
            comments: 4,
            timestamp: '11h ago'
        },
        {
            postImageUrl: "../../assets/imgs/4.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/2.jpg",
            date: 'June 28, 2016',
            likes: 46,
            text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
            comments: 66,
            timestamp: '4mo ago'
        },
        {
            postImageUrl: "../../assets/imgs/7.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/5.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/6.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/8.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/avatar.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        },
        {
            postImageUrl: "../../assets/imgs/1.jpg",
            text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
            date: 'October 23, 2016',
            likes: 30,
            comments: 64,
            timestamp: '30d ago'
        }
    ];

    constructor(public navCtrl: NavController, public ImgurApiProvider: ImgurApiProvider) {
        this.getHomeGallery();
    }

    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }

    goToHome() {
        this.navCtrl.setRoot(SearchPage)
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

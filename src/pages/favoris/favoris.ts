import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SearchPage} from '../search/search'
import {Add_ContentPage} from "../add_content/add_content";
import {ProfilePage} from "../profile/profile";
import {ImgurApiProvider} from "../../providers/imgur-api/imgur-api";



@Component({
    selector: 'page-favoris',
    templateUrl: 'favoris.html'
})
export class FavorisPage {

    openMenu = false;
    favorites = [];

    user = {
        name: 'Maximilien Desnos',
        profileImage: '../../assets/imgs/avatar.jpg',
        coverImage: '../../assets/imgs/1.jpg',
        occupation: 'Developper',
        location: 'Lille, FR',
        description: 'Hello !! I have a big dick'
    };

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

    size = this.posts.length;

    constructor(public navCtrl: NavController, public ImgurApiProvider: ImgurApiProvider) {

    }

    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }

    goToHome() {
        this.navCtrl.setRoot(HomePage)
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

    // getFavorites(){
    //     this.ImgurApiProvider.getToken().then(data => {
    //         this.favorites = data;
    //     })
    // }
}

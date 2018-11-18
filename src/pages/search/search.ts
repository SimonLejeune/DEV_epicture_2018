import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {Add_ContentPage} from "../add_content/add_content"
import {FavorisPage} from "../favoris/favoris"
import {ProfilePage} from "../profile/profile";
import {ImgurApiProvider} from '../../providers/imgur-api/imgur-api';


@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    openMenu = false;
    tags = [];
    search = [];
    query : string;

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

    getSearch(){
        this.ImgurApiProvider.search(this.query).then(data => {
            this.search = data;
        })
    }

    getTags() {
        this.ImgurApiProvider.getTags().then(data => {
            this.tags = data;
        })
    }

    setFilteredItems() {

    }
}

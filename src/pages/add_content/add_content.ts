import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'
import { ProfilePage } from "../profile/profile";
import { FavorisPage } from "../favoris/favoris";


@Component({
  selector: 'page-home',
  templateUrl: 'add_content.html'
})
export class Add_ContentPage {

  openMenu = false;

  constructor(public navCtrl: NavController) {

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
}

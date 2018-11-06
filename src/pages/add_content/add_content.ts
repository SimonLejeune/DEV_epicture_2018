import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'
import { ProfilePage } from "../profile/profile";
import { FavorisPage } from "../favoris/favoris";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'add_content.html'
})
export class Add_ContentPage {

  openMenu = false;
  myphoto:any;

  constructor(public navCtrl: NavController, private camera:Camera) {

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

  takephoto() {
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.myphoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
          // Handle error
      });
  }
}

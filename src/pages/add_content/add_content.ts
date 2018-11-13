import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SearchPage} from '../search/search'
import {ProfilePage} from "../profile/profile";
import {FavorisPage} from "../favoris/favoris";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
    selector: 'page-home',
    templateUrl: 'add_content.html'
})
export class Add_ContentPage {

    openMenu = false;
    myphoto: any;

    constructor(public navCtrl: NavController, private camera: Camera) {

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

    pictureFromCamera() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }

        this.capturePhoto(options);
    }

    pictureFromGallery() {
        //Added PictureSourceType.PHOTOLIBRARY to access from gallery.
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }

        this.capturePhoto(options)
    }

    async capturePhoto(options: CameraOptions) {
        try {
            //Result is a base64 image but can be changed to use a filepath.
            const result = await this.camera.getPicture(options)
            //Append result to image to display in view
            this.myphoto= `data:image/jpeg;base64,${result}`;
        }
        catch (e) {
            console.error(e);
        }
    }
}

webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__["a" /* Add_ContentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__["a" /* Add_ContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favoris_favoris__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_content_add_content__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, /* public global: AppState,*/ splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_4__pages_search_search__["a" /* SearchPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Add photo', component: __WEBPACK_IMPORTED_MODULE_8__pages_add_content_add_content__["a" /* Add_ContentPage */] },
            { title: 'Favoris', component: __WEBPACK_IMPORTED_MODULE_6__pages_favoris_favoris__["a" /* FavorisPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //   this.global.set('theme', 'theme-dark');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favoris_favoris__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    SearchPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.togglePopupMenu();
    };
    SearchPage.prototype.goSearch = function () {
        this.navCtrl.setRoot(SearchPage_1);
        this.togglePopupMenu();
    };
    SearchPage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
        this.togglePopupMenu();
    };
    SearchPage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_content_add_content__["a" /* Add_ContentPage */]);
        this.togglePopupMenu();
    };
    SearchPage.prototype.goToFavoris = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__favoris_favoris__["a" /* FavorisPage */]);
        this.togglePopupMenu();
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Search</h3>\n\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favoris_favoris__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
        this.posts = [
            {
                postImageUrl: "../../assets/imgs/3.jpg",
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
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
                text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
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
    }
    HomePage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    HomePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        this.togglePopupMenu();
    };
    HomePage.prototype.goSearch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        this.togglePopupMenu();
    };
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        this.togglePopupMenu();
    };
    HomePage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_content_add_content__["a" /* Add_ContentPage */]);
        this.togglePopupMenu();
    };
    HomePage.prototype.goToFavoris = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__favoris_favoris__["a" /* FavorisPage */]);
        this.togglePopupMenu();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of posts">\n      <img [src]="post.postImageUrl" imageViewer>\n      <div *ngIf="post.text" class="post-description">\n        <ion-icon id="like" name="heart"></ion-icon>\n        <small>{{ post.text }}</small>\n      </div>\n    </ion-card>\n  </div>\n\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Add_ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favoris_favoris__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Add_ContentPage = /** @class */ (function () {
    function Add_ContentPage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.openMenu = false;
    }
    Add_ContentPage_1 = Add_ContentPage;
    Add_ContentPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    Add_ContentPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.togglePopupMenu();
    };
    Add_ContentPage.prototype.goSearch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        this.togglePopupMenu();
    };
    Add_ContentPage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        this.togglePopupMenu();
    };
    Add_ContentPage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(Add_ContentPage_1);
        this.togglePopupMenu();
    };
    Add_ContentPage.prototype.goToFavoris = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__favoris_favoris__["a" /* FavorisPage */]);
        this.togglePopupMenu();
    };
    Add_ContentPage.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    Add_ContentPage = Add_ContentPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/add_content/add_content.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add photo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Photo</h3>\n\n  <button ion-button (click)="takephoto()">take photo</button>\n  <p align="center"><img src="{{ myphoto }}"></p>\n\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/add_content/add_content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], Add_ContentPage);
    return Add_ContentPage;
    var Add_ContentPage_1;
}());

//# sourceMappingURL=add_content.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favoris_favoris__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
        this.user = {
            name: 'Maximilien Desnos',
            profileImage: '../../assets/imgs/avatar.jpg',
            coverImage: '../../assets/imgs/1.jpg',
            occupation: 'Developper',
            location: 'Lille, FR',
            description: 'Hello !! I have a big dick'
        };
        this.posts = [
            {
                postImageUrl: "../../assets/imgs/3.jpg",
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
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
                text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
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
        this.size = this.posts.length;
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    ProfilePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.togglePopupMenu();
    };
    ProfilePage.prototype.goSearch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        this.togglePopupMenu();
    };
    ProfilePage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(ProfilePage_1);
        this.togglePopupMenu();
    };
    ProfilePage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_content_add_content__["a" /* Add_ContentPage */]);
        this.togglePopupMenu();
    };
    ProfilePage.prototype.goToFavoris = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__favoris_favoris__["a" /* FavorisPage */]);
        this.togglePopupMenu();
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div id="content">\n    <div id="profile-info" padding>\n\n      <img id="profile-image" [src]="user.profileImage">\n      <h3 id="profile-name">{{user.name}}</h3>\n      <p>{{user.occupation}} &bull; {{posts?.length}} </p>\n      <p class="profile-description">{{user.description}}</p>\n    </div>\n\n\n    <div *ngIf="size == 0" id="no-list-photo">\n      No photo <br> Think to add <br>\n      <button class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </button>\n    </div>\n\n    <div class="pins">\n      <ion-card class="pin" *ngFor="let post of posts">\n        <img [src]="post.postImageUrl" imageViewer>\n        <div *ngIf="post.text" class="post-description">\n          <ion-icon id="like" name="heart"></ion-icon>\n          <small>{{ post.text }}</small>\n        </div>\n\n      </ion-card>\n    </div>\n  </div>\n\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavorisPage = /** @class */ (function () {
    function FavorisPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
        this.user = {
            name: 'Maximilien Desnos',
            profileImage: '../../assets/imgs/avatar.jpg',
            coverImage: '../../assets/imgs/1.jpg',
            occupation: 'Developper',
            location: 'Lille, FR',
            description: 'Hello !! I have a big dick'
        };
        this.posts = [
            {
                postImageUrl: "../../assets/imgs/3.jpg",
                text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
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
                text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
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
        this.size = this.posts.length;
    }
    FavorisPage_1 = FavorisPage;
    FavorisPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    FavorisPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.togglePopupMenu();
    };
    FavorisPage.prototype.goSearch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        this.togglePopupMenu();
    };
    FavorisPage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
        this.togglePopupMenu();
    };
    FavorisPage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_content_add_content__["a" /* Add_ContentPage */]);
        this.togglePopupMenu();
    };
    FavorisPage.prototype.goToFavoris = function () {
        this.navCtrl.setRoot(FavorisPage_1);
        this.togglePopupMenu();
    };
    FavorisPage = FavorisPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoris',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/favoris/favoris.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favoris</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n\n    <div id="content">\n\n      <div id="profile-info" padding>\n        <img id="profile-image" [src]="user.profileImage">\n        <h3 id="profile-name">{{user.name}}</h3>\n        <p>{{user.occupation}} &bull; {{posts?.length}} </p>\n        <p class="profile-description">{{user.description}}</p>\n      </div>\n\n\n      <div *ngIf="size == 0" id="no-list-photo">\n        No photo <br> Think to add <br>\n        <button class="popup-menu-item" (click)="goToAdd()">\n          <ion-icon name="add-circle"></ion-icon>\n          <span>ADD</span>\n        </button>\n      </div>\n\n      <div class="pins">\n        <ion-card class="pin" *ngFor="let post of posts">\n          <img [src]="post.postImageUrl" imageViewer>\n          <div *ngIf="post.text" class="post-description">\n            <ion-icon id="like" name="heart"></ion-icon>\n            <small>{{ post.text }}</small>\n          </div>\n        </ion-card>\n      </div>\n    </div>\n\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/favoris/favoris.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], FavorisPage);
    return FavorisPage;
    var FavorisPage_1;
}());

//# sourceMappingURL=favoris.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map
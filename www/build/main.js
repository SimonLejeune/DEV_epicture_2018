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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(navCtrl, navParams, connectionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionService = connectionService;
    }
    ConnectionPage.prototype.login_in = function () {
        this.token = this.connectionService.connection();
        return (this.token);
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connect',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/connection/connect.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n    <button (click)="login_in()">\n        <ion-icon name="menu"></ion-icon>\n    </button>\n</body>\n</html>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/connection/connect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//f2f718cb46cb777
//5af377ae445d2a1
var ConnectionService = /** @class */ (function () {
    function ConnectionService() {
        this.url = 'https://api.imgur.com/';
        this.clientId = '5af377ae445d2a1';
    }
    ConnectionService.prototype.connection = function () {
        var _this = this;
        var oauth = open(this.url + 'oauth2/authorize?client_id=' + this.clientId + '&response_type=token', '_self', 'location=no');
        oauth.addEventListener("loadstart", function (event) {
            if ((event.url).indexOf('access_token') !== -1) {
                _this.token = event.url.slice(event.url.indexOf('access_token=') + 'access_token='.length);
                oauth.close();
                return (_this.token);
            }
            else {
                console.log("Error loging in");
            }
        });
    };
    ConnectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConnectionService);
    return ConnectionService;
}());

//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_connection_connection_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_connection_connection__ = __webpack_require__(248);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__["a" /* Add_ContentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_connection_connection__["a" /* ConnectionPage */]
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
                __WEBPACK_IMPORTED_MODULE_9__pages_add_content_add_content__["a" /* Add_ContentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_connection_connection__["a" /* ConnectionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__pages_connection_connection_service__["a" /* ConnectionService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_connection_connection__ = __webpack_require__(248);
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
            { title: 'Favoris', component: __WEBPACK_IMPORTED_MODULE_6__pages_favoris_favoris__["a" /* FavorisPage */] },
            { title: 'Connect', component: __WEBPACK_IMPORTED_MODULE_9__pages_connection_connection__["a" /* ConnectionPage */] }
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
            selector: 'page-search',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Search</h3>\n\n\n</ion-content>\n<ion-footer>\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/search/search.html"*/
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
            selector: 'page-home',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of posts">\n      <img [src]="post.postImageUrl" imageViewer>\n      <div *ngIf="post.text" class="post-description">\n        <ion-icon id="like" name="heart"></ion-icon>\n        <small>{{ post.text }}</small>\n      </div>\n    </ion-card>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/home/home.html"*/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    Add_ContentPage.prototype.pictureFromCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.capturePhoto(options);
    };
    Add_ContentPage.prototype.pictureFromGallery = function () {
        //Added PictureSourceType.PHOTOLIBRARY to access from gallery.
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.capturePhoto(options);
    };
    Add_ContentPage.prototype.capturePhoto = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.camera.getPicture(options)
                            //Append result to image to display in view
                        ];
                    case 1:
                        result = _a.sent();
                        //Append result to image to display in view
                        this.myphoto = "data:image/jpeg;base64," + result;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Add_ContentPage = Add_ContentPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/add_content/add_content.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add photo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Photo</h3>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <button block ion-button color="primary" (click)="pictureFromCamera()">Camera</button>\n            </ion-col>\n            <ion-col col-6>\n                <button block ion-button color="primary" (click)="pictureFromGallery()">Photo Gallery</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <img *ngIf="myphoto" [src]="myphoto" alt="">\n</ion-content>\n<ion-footer>\n    <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n        <div class="popup-menu-item" (click)="goToHome()">\n            <ion-icon name="home"></ion-icon>\n            <span>HOME</span>\n        </div>\n        <div class="popup-menu-item" (click)="goSearch()">\n            <ion-icon name="search"></ion-icon>\n            <span>SEARCH</span>\n        </div>\n        <div class="popup-menu-item" (click)="goToProfile()">\n            <ion-icon name="ionitron"></ion-icon>\n            <span>PROFILE</span>\n        </div>\n        <div class="popup-menu-item" (click)="goToFavoris()">\n            <ion-icon name="heart"></ion-icon>\n            <span>FAVORIS</span>\n        </div>\n        <div class="popup-menu-item" (click)="goToAdd()">\n            <ion-icon name="add-circle"></ion-icon>\n            <span>ADD</span>\n        </div>\n    </div>\n</div>\n</ion-footer>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/add_content/add_content.html"*/
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
            selector: 'page-profile',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div id="content">\n    <div id="profile-info" padding>\n\n      <img id="profile-image" [src]="user.profileImage">\n      <h3 id="profile-name">{{user.name}}</h3>\n      <p>{{user.occupation}} &bull; {{posts?.length}} </p>\n      <p class="profile-description">{{user.description}}</p>\n    </div>\n\n\n    <div *ngIf="size == 0" id="no-list-photo">\n      No photo <br> Think to add <br>\n      <button class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </button>\n    </div>\n\n    <div class="pins">\n      <ion-card class="pin" *ngFor="let post of posts">\n        <img [src]="post.postImageUrl" imageViewer>\n        <div *ngIf="post.text" class="post-description">\n          <ion-icon id="like" name="heart"></ion-icon>\n          <small>{{ post.text }}</small>\n        </div>\n\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class="popup-menu">\n    <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n    <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n    <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n      <div class="popup-menu-item" (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n        <span>HOME</span>\n      </div>\n      <div class="popup-menu-item" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n        <span>SEARCH</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToProfile()">\n        <ion-icon name="ionitron"></ion-icon>\n        <span>PROFILE</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToFavoris()">\n        <ion-icon name="heart"></ion-icon>\n        <span>FAVORIS</span>\n      </div>\n      <div class="popup-menu-item" (click)="goToAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n        <span>ADD</span>\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/profile/profile.html"*/
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
            selector: 'page-favoris',template:/*ion-inline-start:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/favoris/favoris.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Favoris</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n\n    <div id="content">\n\n        <div id="profile-info" padding>\n            <img id="profile-image" [src]="user.profileImage">\n            <h3 id="profile-name">{{user.name}}</h3>\n            <p>{{user.occupation}} &bull; {{posts?.length}} </p>\n            <p class="profile-description">{{user.description}}</p>\n        </div>\n\n\n        <div *ngIf="size == 0" id="no-list-photo">\n            No photo <br> Think to add <br>\n            <button class="popup-menu-item" (click)="goToAdd()">\n                <ion-icon name="add-circle"></ion-icon>\n                <span>ADD</span>\n            </button>\n        </div>\n\n        <div class="pins">\n            <ion-card class="pin" *ngFor="let post of posts">\n                <img [src]="post.postImageUrl" imageViewer>\n                <div *ngIf="post.text" class="post-description">\n                    <ion-icon id="like" name="heart"></ion-icon>\n                    <small>{{ post.text }}</small>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n\n\n</ion-content>\n<ion-footer>\n    <div class="popup-menu">\n        <div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n        <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n        <div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n            <div class="popup-menu-item" (click)="goToHome()">\n                <ion-icon name="home"></ion-icon>\n                <span>HOME</span>\n            </div>\n            <div class="popup-menu-item" (click)="goSearch()">\n                <ion-icon name="search"></ion-icon>\n                <span>SEARCH</span>\n            </div>\n            <div class="popup-menu-item" (click)="goToProfile()">\n                <ion-icon name="ionitron"></ion-icon>\n                <span>PROFILE</span>\n            </div>\n            <div class="popup-menu-item" (click)="goToFavoris()">\n                <ion-icon name="heart"></ion-icon>\n                <span>FAVORIS</span>\n            </div>\n            <div class="popup-menu-item" (click)="goToAdd()">\n                <ion-icon name="add-circle"></ion-icon>\n                <span>ADD</span>\n            </div>\n        </div>\n    </div>\n</ion-footer>'/*ion-inline-end:"/home/maximilien/rendu/app/DEV_epicture_2018/src/pages/favoris/favoris.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], FavorisPage);
    return FavorisPage;
    var FavorisPage_1;
}());

//# sourceMappingURL=favoris.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map
webpackJsonp([3],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		274,
		1
	],
	"../pages/messaggi/messaggi.module": [
		275,
		2
	],
	"../pages/mie-inserzioni/mie-inserzioni.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_conversazione__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_messaggio__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_utente__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService() {
        var utenteLoggato = new __WEBPACK_IMPORTED_MODULE_2__model_utente__["a" /* Utente */]("UtenteLoggato", "utenteloggato@email.com", "nonImporta", new Date(2018 - 9 - 20), 1, 1, {});
        var altroUtente1 = new __WEBPACK_IMPORTED_MODULE_2__model_utente__["a" /* Utente */]("AltroUtente1", "altroutente1@email.com", "nonImporta", new Date(2018 - 9 - 20), 1, 1, {});
        var altroUtente2 = new __WEBPACK_IMPORTED_MODULE_2__model_utente__["a" /* Utente */]("AltroUtente2", "altroutente2@email.com", "nonImporta", new Date(2018 - 9 - 20), 1, 1, {});
        var messaggio1 = new __WEBPACK_IMPORTED_MODULE_1__model_messaggio__["a" /* Messaggio */]("1", utenteLoggato, altroUtente1, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
        var messaggio2 = new __WEBPACK_IMPORTED_MODULE_1__model_messaggio__["a" /* Messaggio */]("1", altroUtente1, utenteLoggato, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
        var conversazione1 = new __WEBPACK_IMPORTED_MODULE_0__model_conversazione__["a" /* Conversazione */]("1", utenteLoggato, altroUtente1, [messaggio1, messaggio2]);
        messaggio1 = new __WEBPACK_IMPORTED_MODULE_1__model_messaggio__["a" /* Messaggio */]("2", utenteLoggato, altroUtente2, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
        messaggio2 = new __WEBPACK_IMPORTED_MODULE_1__model_messaggio__["a" /* Messaggio */]("2", altroUtente2, utenteLoggato, new Date(2018, 9, 20, 10, 33), "Lorem ipsum dolores");
        var conversazione2 = new __WEBPACK_IMPORTED_MODULE_0__model_conversazione__["a" /* Conversazione */]("2", utenteLoggato, altroUtente2, [messaggio1, messaggio2]);
        this.conversazioni = [conversazione1, conversazione2];
    }
    ChatService.prototype.getConversations = function () {
        return this.conversazioni;
    };
    ChatService.prototype.getChat = function (idConversazione, base, offset) {
        for (var i = 0; i < this.conversazioni.length; i++) {
            if (this.conversazioni[i].id == idConversazione) {
                return this.conversazioni[i].messaggi.slice(base, offset + 1);
            }
        }
    };
    ChatService.prototype.sendMessage = function (messaggio) {
        return;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_messaggi_messaggi__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_chat_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_utente_service__ = __webpack_require__(273);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messaggi_messaggi__["a" /* MessaggiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messaggi/messaggi.module#MessaggiPageModule', name: 'MessaggiPage', segment: 'messaggi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mie-inserzioni/mie-inserzioni.module#MieInserzioniPageModule', name: 'MieInserzioniPage', segment: 'mie-inserzioni', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messaggi_messaggi__["a" /* MessaggiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_9__services_utente_service__["a" /* UtenteService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversazione; });
var Conversazione = /** @class */ (function () {
    function Conversazione(id, utenteLoggato, altroUtente, messaggi) {
        this.id = id;
        this.utenteLoggato = utenteLoggato;
        this.altroUtente = altroUtente;
        this.messaggi = messaggi;
    }
    return Conversazione;
}());

//# sourceMappingURL=conversazione.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messaggio; });
var Messaggio = /** @class */ (function () {
    function Messaggio(idConversazione, mittente, destinatario, timestamp, testo) {
        this.idConversazione = idConversazione;
        this.mittente = mittente;
        this.destinatario = destinatario;
        this.timestamp = timestamp;
        this.testo = testo;
    }
    return Messaggio;
}());

//# sourceMappingURL=messaggio.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utente; });
var Utente = /** @class */ (function () {
    function Utente(nome, email, password, dataIscrizione, inserzioniPubblicate, inserzioniOnline, inserzioniPerCategoria) {
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.dataIscrizione = dataIscrizione;
        this.inserzioniPubblicate = inserzioniPubblicate;
        this.inserzioniOnline = inserzioniOnline;
        this.inserzioniPerCategoria = inserzioniPerCategoria;
        //^ teoricamente il dizionario JSON dovrebbe essere convertito in un oggetto javascript
        //direttamente assegnabile alla variabile; in caso contrario scriverò dei metodi di utility
        //per popolare la variabile a partire dal dizionario JSON
    }
    return Utente;
}());

//# sourceMappingURL=utente.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_messaggi_messaggi__ = __webpack_require__(99);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_messaggi_messaggi__["a" /* MessaggiPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtenteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtenteService = /** @class */ (function () {
    function UtenteService() {
    }
    UtenteService.prototype.login = function (email, password) {
    };
    UtenteService.prototype.signup = function (utente) {
    };
    UtenteService.prototype.logout = function () {
    };
    UtenteService.prototype.deleteAccount = function () {
    };
    UtenteService.prototype.changeLanguage = function (lingua) {
    };
    UtenteService.prototype.modifyProfile = function (utente) {
    };
    UtenteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtenteService);
    return UtenteService;
}());

//# sourceMappingURL=utente.service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MESSAGGI_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHAT_PAGE; });
var MESSAGGI_PAGE = 'MessaggiPage';
var CHAT_PAGE = 'ChatPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessaggiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MessaggiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessaggiPage = /** @class */ (function () {
    function MessaggiPage(navCtrl, navParams, chatService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.conversazioni = chatService.getConversations();
    }
    MessaggiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessaggiPage');
    };
    MessaggiPage.prototype.conversazioneTapped = function (idConversazione) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* CHAT_PAGE */], { "idConversazione": idConversazione });
    };
    MessaggiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messaggi',template:/*ion-inline-start:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\messaggi\messaggi.html"*/'<!--\n  Generated template for the MessaggiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Messaggi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let conversazione of conversazioni" (click)="conversazioneTapped(conversazione.id)">\n    <ion-card-content>\n      <b text-left>{{conversazione.altroUtente.nome}}</b>\n      <p text-right>{{conversazione.messaggi[0].timestamp.getDay()}}/{{conversazione.messaggi[0].timestamp.getMonth()}}</p>\n      <br>\n      {{conversazione.messaggi[0].testo}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\messaggi\messaggi.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]) === "function" && _c || Object])
    ], MessaggiPage);
    return MessaggiPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=messaggi.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
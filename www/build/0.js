webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MieInserzioniPageModule", function() { return MieInserzioniPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mie_inserzioni__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MieInserzioniPageModule = /** @class */ (function () {
    function MieInserzioniPageModule() {
    }
    MieInserzioniPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mie_inserzioni__["a" /* MieInserzioniPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mie_inserzioni__["a" /* MieInserzioniPage */]),
            ],
        })
    ], MieInserzioniPageModule);
    return MieInserzioniPageModule;
}());

//# sourceMappingURL=mie-inserzioni.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MieInserzioniPage; });
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


/**
 * Generated class for the MieInserzioniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MieInserzioniPage = /** @class */ (function () {
    function MieInserzioniPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MieInserzioniPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MieInserzioniPage');
    };
    MieInserzioniPage.prototype.inserzioneTapped = function (idInserzione) {
    };
    MieInserzioniPage.prototype.modificaInserzione = function (inserzione) {
    };
    MieInserzioniPage.prototype.deleteInserzione = function (idInserzione) {
    };
    MieInserzioniPage.prototype.addToPreferiti = function (idInserzione) {
    };
    MieInserzioniPage.prototype.deleteFromPreferiti = function (idInserzione) {
    };
    MieInserzioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mie-inserzioni',template:/*ion-inline-start:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\mie-inserzioni\mie-inserzioni.html"*/'<!--\n  Generated template for the MieInserzioniPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MieInserzioni</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Leonardo Formichetti\Desktop\Ionic Projects\CraftAway\src\pages\mie-inserzioni\mie-inserzioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MieInserzioniPage);
    return MieInserzioniPage;
}());

//# sourceMappingURL=mie-inserzioni.js.map

/***/ })

});
//# sourceMappingURL=0.js.map